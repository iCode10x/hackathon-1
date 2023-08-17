import { ProductType } from '@/Types'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'
const SingleProduct = ({
  label,
  image,
  price,
  category,
  slug,
  showCategory,
}: ProductType) => {
  return (
    <Link href={`/single-product/${slug.current}`}>
      <div
        className={`flex flex-col items-center mx-4 font-bold text-lg ${
          showCategory && 'shadow-lg pb-2 w-[280px]'
        }`}
      >
        <Image
          src={urlForImage(image).url()}
          alt="image"
          width={330}
          height={330}
          className="bg-[#D6D6D8] w-full h-[300px] object-contain"
        />
        <p className="mt-2">{label}</p>
        {showCategory && <p className="text-gray-500 font-bold">{category}</p>}
        <p>${price}</p>
      </div>
    </Link>
  )
}
export default SingleProduct
