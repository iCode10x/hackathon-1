import { fetchData } from '@/utils/SanityQueries'
import SingleProduct from '@/components/SingleProduct'
import { ProductType } from '@/Types'
const AllProducts = async () => {
  const data: ProductType[] = await fetchData('product')
  return (
    <section className="flex flex-wrap gap-10 justify-center mt-[80px]">
      {data.map((item) => (
        <SingleProduct key={item.label} {...item} showCategory={true} />
      ))}
    </section>
  )
}
export default AllProducts
