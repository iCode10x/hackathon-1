'use client'
import { useState, useEffect } from 'react'
import { client } from '../../../sanity/lib/client'
import SingleProduct from '@/components/SingleProduct'
import { makeQuery } from '@/utils/SanityQueries'
import { useAppContext } from '@/context/AppContext'

import Spinner from '@/components/Spinner'
import { ProductType } from '@/Types'
const Search = () => {
  const [products, setProducts] = useState<ProductType[] | null>()
  const [loading, setLoading] = useState(false)
  const { search } = useAppContext()
  useEffect(() => {
    setLoading(true)
    const query = makeQuery(search)
    client.fetch(query).then((data) => {
      if (data.length >= 1) {
        setProducts(data)
      } else {
        setProducts(null)
      }
      setLoading(false)
    })
  }, [search])
  if (loading)
    return (
      <div className="flex justify-start items-center mt-[200px]">
        <Spinner message="Loading..." />
      </div>
    )
  if (!loading && !products && search)
    return (
      <div className="text-center text-3xl font-bold mt-[100px] text-red-500">
        No such product found. Try entering full name!
      </div>
    )
  if (!loading && !products && !search) {
    return (
      <p className="text-3xl font-bold mt-[100px] text-center">
        Search item by entering category or name or gender of the product
      </p>
    )
  }
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-[80px]">
      {products?.map((item) => (
        <SingleProduct key={item.label} {...item} showCategory={true} />
      ))}
    </div>
  )
}
export default Search
