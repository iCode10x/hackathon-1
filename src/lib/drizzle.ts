import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'
import { InferModel } from 'drizzle-orm'
import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core'

export const cartTable = pgTable('cart', {
  itemId: serial('id').primaryKey(),
  itemSanityId: varchar('sanityid', { length: 255 }).notNull(),
  itemQuantity: integer('quantity').notNull(),
  itemPrice: integer('price').notNull(),
  itemSize: varchar('size', { length: 255 }).notNull(),
  userId: varchar('userid', { length: 255 }).notNull(),
})

export const db = drizzle(sql)
export type ItemType = InferModel<typeof cartTable>
export type newItemType = InferModel<typeof cartTable, 'insert'>
