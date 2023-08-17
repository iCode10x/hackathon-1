import { type SchemaTypeDefinition } from 'sanity'
import { Banner1 } from './schemas/Banner1'
import { Banner2 } from './schemas/Banner2'
import { Product } from './schemas/Product'
import { Banner4 } from './schemas/Banner4'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Banner1, Banner2, Product, Banner4],
}
