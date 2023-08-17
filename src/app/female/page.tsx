import { fetchProductByGender } from '@/utils/SanityQueries'
import { ProductType } from '@/Types'
import SingleProduct from '@/components/SingleProduct'
const Female = async () => {
  const data: ProductType[] = await fetchProductByGender('female')
  return (
    <section className="flex flex-wrap gap-10 justify-center mt-[80px]">
      {data.map((item) => (
        <SingleProduct key={item.label} {...item} showCategory={true} />
      ))}
    </section>
  )
}
export default Female
