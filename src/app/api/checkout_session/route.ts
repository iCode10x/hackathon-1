import { ItemType } from '@/lib/drizzle'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const key = process.env.STRIPE_SECRET_KEY || ''
const stripe = new Stripe(key, {
  apiVersion: '2022-11-15',
})

const itemsData = [
  {
    name: 'Flex Push Button Bomber',
    price: 'price_1NfiimAnvvTZRCbWNmIpDDsJ',
    quantity: 1,
    sanityId: 'f3c128d2-6313-4ae4-a1eb-4b2f634575bd',
  },
  {
    name: 'Lite Sweatpants',
    price: 'price_1NfiiIAnvvTZRCbWRP61bhUJ',
    quantity: 1,
    sanityId: 'd9a328a2-d663-4483-bff4-b20f55fd6a52',
  },
  {
    name: 'Raglan Sweatshirt',
    price: 'price_1NfihpAnvvTZRCbWfP6cz5Md',
    quantity: 1,
    sanityId: 'c810d994-50da-4e8b-89cf-e7ee7a8443d7',
  },
  {
    name: 'Flex Sweatpants',
    price: 'price_1NfihWAnvvTZRCbWYFdu5bNJ',
    quantity: 1,
    sanityId: 'bff95ef1-15be-4c6f-9e80-528e5c666d52',
  },
  {
    name: 'Pink Fleece Sweatpants',
    price: 'price_1Nfih9AnvvTZRCbWiukJssdN',
    quantity: 1,
    sanityId: 'a53a63c1-f4cc-40d2-82d0-a146699b37e8',
  },
  {
    name: 'Flex Sweatshirt',
    price: 'price_1NfigLAnvvTZRCbWBtEMeENq',
    quantity: 1,
    sanityId: 'a53a63c1-f4cc-40d2-82d0-a146699b37e8',
  },
  {
    name: 'Imperial Alpaca Hoodie',
    price: 'price_1NfigoAnvvTZRCbW0TGpKfZN',
    quantity: 1,
    sanityId: '8ce2594a-9bfd-42db-be78-994256bdd17b',
  },
  {
    name: 'Cameryn Sash Tie Dress',
    price: 'price_1Nfig0AnvvTZRCbWcpt0UOyi',
    quantity: 1,
    sanityId: '7cd3d688-4a63-407e-8898-b28aba1ac5a8',
  },
  {
    name: 'Muscle Tank',
    price: 'price_1NfifeAnvvTZRCbWSdPTz8fv',
    quantity: 1,
    sanityId: '6e57aca9-a5f7-4526-8deb-f07433716c7b',
  },
  {
    name: 'Brushed Bomber',
    price: 'price_1Nfif4AnvvTZRCbWWLnvG9Tp',
    quantity: 1,
    sanityId: '67095219-29ad-4182-b4ae-533da52dabad',
  },
  {
    name: 'Brushed Raglan Sweatshirt',
    price: 'price_1NfiZbAnvvTZRCbW26bfn4Ct',
    quantity: 1,
    sanityId: '1521f8d6-48e5-493f-b0a1-b0a756d9b2ae',
  },
]

export const POST = async (req: NextRequest) => {
  const cartItemsArray = await req.json()
  const line_items = itemsData.filter((item) => {
    for (let i = 0; i < cartItemsArray.length; i++) {
      const element: ItemType = cartItemsArray[i]
      if (element.itemSanityId === item.sanityId) {
        item.quantity = element.itemQuantity
        return true
      }
    }
  })
  const line_itemsToSend = line_items.map((item) => {
    return {
      price: item.price,
      quantity: item.quantity,
    }
  })
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: line_itemsToSend,
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    })

    return NextResponse.json(session.url as string)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
