'use client'
import { ItemType } from '@/lib/drizzle'
type ContextType = {
  setFetchData: Dispatch<SetStateAction<number>>
  totalQuantity: number
  totalPrice: number
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
const context = createContext({} as ContextType)

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [fetchData, setFetchData] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [search, setSearch] = useState('')

  async function getAllItems() {
    const res = await fetch('/api/cart', {
      method: 'GET',
      cache: 'no-store',
    })

    // const { data }: { data: ItemType[] } = await res.json()
    const items = await res.json()
    const data: ItemType[] = items?.data
    const total = data?.reduce((store, currentValue) => {
      return store + currentValue.itemQuantity
    }, 0)
    const price = data?.reduce((store, currentValue) => {
      return store + currentValue.itemPrice * currentValue.itemQuantity
    }, 0)
    setTotalQuantity(total)
    setTotalPrice(price)
  }
  useEffect(() => {
    getAllItems()
  }, [fetchData])
  return (
    <context.Provider
      value={{ setFetchData, totalQuantity, totalPrice, search, setSearch }}
    >
      {children}
    </context.Provider>
  )
}
export default AppContext

export const useAppContext = () => {
  return useContext(context)
}
