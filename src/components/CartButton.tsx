'use client'
import { BsCart } from 'react-icons/bs'
import Link from 'next/link'
import { useAppContext } from '@/context/AppContext'
const CartButton = () => {
  const { totalQuantity } = useAppContext()
  return (
    <Link href="/cart" className="bg-gray-200 rounded-full p-2 relative">
      <BsCart size={25} />
      <span className="bg-red-500 text-white absolute -top-1 -right-1 rounded-full p-1 px-2 text-[10px]">
        {totalQuantity}
      </span>
    </Link>
  )
}
export default CartButton
