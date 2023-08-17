import { Image } from 'sanity'
export type Banner1Type = {
  paragraph: string
  heading: string
  bannerImage: Image
  brands: Image[]
}
export type Banner2Type = {
  images: Image[]
  mainTexts: string[]
  secondTexts: string[]
  thirdTexts: string[]
}
export type ProductType = {
  _id: string
  label: string
  slug: {
    current: string
    _type: string
  }
  price: number
  quantity: number
  image: Image
  category: string
  gender: string
  care: string[]
  details: string
  showCategory?: boolean
}
export type Banner4Type = {
  image: Image
  headings: string[]
  bigText: string
  paragraphs: string[]
  bigParagraph: string
}
export type RequestObjectType = {
  itemId?: number
  sanityId: string
  quantity: number
  price: number
  size: string
  userId: string
}
