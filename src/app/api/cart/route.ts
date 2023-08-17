import { NextRequest, NextResponse } from 'next/server'
import { RequestObjectType } from '@/Types'
import { db, cartTable } from '@/lib/drizzle'
import { eq, and } from 'drizzle-orm'

export const GET = async () => {
  const res = await db.select().from(cartTable)
  return NextResponse.json({ data: res })
}

export const POST = async (req: NextRequest) => {
  const request: RequestObjectType = await req.json()
  try {
    const allItems = await db.select().from(cartTable)
    const itemExists = allItems.find(
      (item) => request.sanityId === item.itemSanityId
    )
    if (itemExists) {
      const foundItemQuantity = itemExists.itemQuantity
      let newQuantity = foundItemQuantity + request.quantity
      const res = await db
        .update(cartTable)
        .set({
          itemQuantity: newQuantity,
        })
        .where(
          and(
            eq(cartTable.itemSanityId, request.sanityId),
            eq(cartTable.userId, request.userId)
          )
        )
        .returning()
      return NextResponse.json({ res })
    } else {
      const res = await db
        .insert(cartTable)
        .values({
          itemSanityId: request.sanityId,
          itemPrice: request.price,
          itemQuantity: request.quantity,
          itemSize: request.size,
          userId: request.userId,
        })
        .returning()
      return NextResponse.json({ res })
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export const DELETE = async (req: NextRequest) => {
  const request: RequestObjectType = await req.json()
  try {
    if (request.itemId) {
      const res = await db
        .delete(cartTable)
        .where(eq(cartTable.itemId, request.itemId))
        .returning()
      return NextResponse.json({ res })
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export const PATCH = async (req: NextRequest) => {
  type RequestType = {
    action: 'inc' | 'dec'
    itemId: number
  }
  const request: RequestType = await req.json()
  const targetItem = await db
    .select()
    .from(cartTable)
    .where(eq(cartTable.itemId, request.itemId))
  let newQuantity = 0
  if (request.action === 'inc') {
    newQuantity = targetItem[0].itemQuantity + 1
  } else {
    if (targetItem[0].itemQuantity === 1) {
      newQuantity = 1
    } else {
      newQuantity = targetItem[0].itemQuantity - 1
    }
  }
  try {
    const res = await db
      .update(cartTable)
      .set({ itemQuantity: newQuantity })
      .where(eq(cartTable.itemId, request.itemId))
      .returning()
    return NextResponse.json({ res })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
