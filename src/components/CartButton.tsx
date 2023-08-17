'use client'
import { BsCart } from 'react-icons/bs'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { useAppContext } from '@/context/AppContext'
const CartButton = () => {
  const { userId } = useAuth()
  console.log(userId)
  const { totalQuantity } = useAppContext()
  return (
    <Link
      href={`/cart?userId=${userId}`}
      className="bg-gray-200 rounded-full p-2 relative"
    >
      <BsCart size={25} />
      <span className="bg-red-500 text-white absolute -top-1 -right-1 rounded-full p-1 px-2 text-[10px]">
        {totalQuantity}
      </span>
    </Link>
  )
}
export default CartButton
