import { ItemType } from '@/lib/drizzle'
import BillComp from './BillComp'
import { useAppContext } from '@/context/AppContext'
import { useAuth } from '@clerk/nextjs'
import CartItem from '@/components/CartItem'
import { AiOutlineShopping } from 'react-icons/ai'
const CartComponent = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userAuth = useAuth()
  const userId = userAuth.userId
  const res = await fetch(`/api/usercart/${userId}`, {
    method: 'GET',
    cache: 'no-store',
  })

  const items = await res.json()
  const data: ItemType[] = items?.data
  if (data?.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center mt-[80px]">
        <AiOutlineShopping size={160} />
        <p className="font-bold text-2xl">Your cart is empty</p>
      </div>
    )
  }
  if (data)
    return (
      <div className="mt-[100px]">
        <p className="text-3xl font-bold my-4">Shopping Cart</p>
        <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row items-start justify-between">
          <div className="flex flex-col gap-7 mt-[40px]">
            {data.map((item) => (
              <CartItem key={item.itemId} {...item} />
            ))}
          </div>
          {data && (
            <div>
              <BillComp itemsData={data} />
            </div>
          )}
        </div>
      </div>
    )
}
export default CartComponent
