'use client'
import { ItemType } from '@/lib/drizzle'
import { useAppContext } from '@/context/AppContext'
import Spinner from './Spinner'
import { useState } from 'react'
type Props = {
  itemsData: ItemType[]
}
const BillComp = ({ itemsData }: Props) => {
  const [loading, setloading] = useState(false)
  const { totalQuantity, totalPrice } = useAppContext()
  async function processCheckout() {
    setloading(true)
    const res = await fetch('/api/checkout_session', {
      method: 'POST',
      body: JSON.stringify(itemsData),
    })
    if (res.ok) {
      const link = await res.json()
      setloading(false)
      window.location.href = link
    }
  }
  if (itemsData)
    return (
      <div className="bg-gray-100 p-7  min-w-[300px] text-xl flex flex-col gap-7 flex-1 w-full">
        <p className="font-bold">Order Summary</p>
        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{totalQuantity} Product</span>
        </div>
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>${totalPrice}</span>
        </div>
        {loading ? (
          <div>
            <Spinner message="Processing!" />
          </div>
        ) : (
          <button
            className="text-lg p-2 font-bold text-white bg-black"
            onClick={processCheckout}
          >
            Process to Checkout
          </button>
        )}
      </div>
    )
}
export default BillComp
