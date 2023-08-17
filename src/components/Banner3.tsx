import { ProductType } from '@/Types'
import { fetchData } from '@/utils/SanityQueries'
import Slider from './Slider'
const Banner3 = async () => {
  const data: ProductType[] = await fetchData('product')
  return (
    <div className="mt-[80px]">
      {/* Upper Texts */}
      <div className="text-center mb-[40px]">
        <p className="font-bold text-blue-700">PROMOTIONS</p>
        <p className="text-3xl font-bold">Check What We Have</p>
      </div>
      {/* Slider */}
      <Slider data={data} />
    </div>
  )
}
export default Banner3
