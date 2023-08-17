'use client'
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ProductType } from '@/Types'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Spinner from './Spinner'
import { useAppContext } from '@/context/AppContext'
import { fetchProductById } from '@/utils/SanityQueries'
import { AiOutlineDelete } from 'react-icons/ai'
type Props = {
  itemId: number
  itemSanityId: string
  itemQuantity: number
  itemPrice: number
  itemSize: string
  userId: string
}
const CartItem = ({
  itemId,
  itemPrice,
  itemQuantity,
  itemSanityId,
  itemSize,
  userId,
}: Props) => {
  const { setFetchData } = useAppContext()
  const router = useRouter()
  const [item, setItem] = useState<ProductType>()
  const [loading, setLoading] = useState(false)
  async function getData() {
    const res = await fetchProductById(itemSanityId)
    setItem(res)
  }
  useEffect(() => {
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function deleteItem() {
    const res = await fetch('/api/cart', {
      method: 'DELETE',
      body: JSON.stringify({
        itemId: itemId,
      }),
    })
    if (res.ok) {
      toast.error('Item removed!')
      setFetchData((prev) => prev + 1)
      router.refresh()
    }
  }
  async function updateQuantity(action: string) {
    setLoading(true)
    const res = await fetch('/api/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        action: action,
        itemId: itemId,
      }),
    })
    if (res.ok) {
      router.refresh()
      setFetchData((prev) => prev + 1)
      setLoading(false)
    }
  }
  if (item)
    return (
      <div className="flex justify-between lg:w-[800px]">
        <div className="flex flex-col sm:flex-row gap-10">
          <Image
            src={urlForImage(item.image).url()}
            alt=""
            height={180}
            width={180}
            className="bg-gray-300 rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl">{item.label}</p>
            <p className="capitalize font-bold text-gray-400">
              {item.category}
            </p>
            <p className="font-bold">Delivery Estimation</p>
            <p className="font-bold text-yellow-500">5 Working Days</p>
            <p className="font-bold">${item.price}</p>
          </div>
        </div>
        {loading ? (
          <div>
            <Spinner message="" />
          </div>
        ) : (
          <div className="flex flex-col items-end justify-between gap-2">
            <button onClick={deleteItem}>
              <AiOutlineDelete size={30} />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity('dec')}
                className="bg-gray-200 p-1 px-3 text-xl rounded-full"
              >
                -
              </button>
              <span>{itemQuantity}</span>
              <button
                onClick={() => updateQuantity('inc')}
                className="bg-gray-200 p-1 px-3 text-xl rounded-full"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    )
}
export default CartItem
