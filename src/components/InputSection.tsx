'use client'
import { toast } from 'react-hot-toast'
import { ProductType } from '@/Types'
import { BsCart } from 'react-icons/bs'
import { useAuth } from '@clerk/nextjs'
import { Dispatch, SetStateAction, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { SignedIn, SignedOut } from '@clerk/nextjs'

const sizeArray = ['XS', 'S', 'M', 'L', 'XL']

const InputSection = ({
  label,
  category,
  price,
  quantity,
  _id,
}: ProductType) => {
  const { setFetchData } = useAppContext()
  const { userId } = useAuth()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('XS')
  async function addToCart() {
    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({
          sanityId: _id,
          quantity: qty,
          price: price,
          size: size,
          userId: userId,
        }),
      })
      if (res.ok) {
        toast.success(`${qty} ${label} added to cart`)
        setFetchData((prev) => prev + 1)
      }
    } catch (error) {
      toast.error(`item could not be added to the cart!`)
      console.log(error)
    }
  }
  return (
    <div className="mt-10 flex flex-col gap-10">
      <div>
        <p className="text-3xl">{label}</p>
        <p className="text-gray-400 text-xl font-bold mt-2">{category}</p>
      </div>
      <div>
        <p className="font-bold">SELECT SIZE</p>
        <div className="flex gap-5">
          {sizeArray.map((item, i) => (
            <SizeButton text={item} size={size} setSize={setSize} key={i} />
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <p className="font-bold text-lg">Quantity:</p>
        <button
          onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : prev))}
          className="bg-gray-200 p-1 px-3 text-xl rounded-full"
        >
          -
        </button>
        {qty}
        <button
          onClick={() => setQty((prev) => prev + 1)}
          className="bg-gray-200 p-1 px-3 text-xl rounded-full"
        >
          +
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <SignedIn>
          <button className="flex bg-[#212121] text-white items-center w-[170px] gap-[10px] px-4 py-3 text-center">
            <BsCart size={20} />
            <span className="font-bold" onClick={addToCart}>
              Add to Cart
            </span>
          </button>
        </SignedIn>
        <SignedOut>
          <p className="text-xl">You need to sign-in first!</p>
        </SignedOut>
        <p className="text-2xl font-bold">${price}.00</p>
      </div>
    </div>
  )
}
export default InputSection

type Props = {
  size: string
  text: string
  setSize: Dispatch<SetStateAction<string>>
}

const SizeButton = ({ text, size, setSize }: Props) => {
  return (
    <div
      onClick={() => setSize(text)}
      className={`rounded-full flex justify-center items-center w-10 h-10 hover:shadow-md hover:shadow-black/60 mt-2 ${
        size == text ? 'bg-black text-white' : null
      }`}
    >
      {text}
    </div>
  )
}
