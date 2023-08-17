import { NextResponse } from 'next/server'
import { db, cartTable } from '@/lib/drizzle'
import { eq } from 'drizzle-orm'

export const GET = async (
  {},
  { params: { id } }: { params: { id: string } }
) => {
  const res = await db.select().from(cartTable).where(eq(cartTable.userId, id))
  return NextResponse.json({ data: res })
}
