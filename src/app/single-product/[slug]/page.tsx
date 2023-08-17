import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
import { fetchProductBySlug } from '@/utils/SanityQueries'
import { client } from '../../../../sanity/lib/client'
import { ProductType } from '@/Types'
import InputSection from '@/components/InputSection'

type Props = {
  params: {
    slug: string
  }
}

const SingleProduct = async ({ params }: Props) => {
  const data: ProductType = await fetchProductBySlug(params.slug)
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-10 mt-[80px] justify-center">
        {/* Image section*/}
        <div className="flex gap-10 items-start justify-start">
          <Image
            src={urlForImage(data.image).url()}
            width={90}
            height={80}
            alt="image"
            className="bg-gray-300"
          />
          <Image
            src={urlForImage(data.image).url()}
            width={500}
            height={400}
            alt="image"
            className="bg-gray-300 lg:w-[500px] w-[300px]"
          />
        </div>
        {/* Input section */}
        <div>
          <InputSection {...data} />
        </div>
      </div>

      {/* Details section */}
      <div className="mt-[55px] border-2 p-8">
        {/* Upper */}
        <div className="relative">
          <p className="lg:text-9xl text-4xl md:text-7xl font-bold opacity-10 tracking-wider">
            Overview
          </p>
          <p className="absolute lg:top-[40%] top-[10%] font-bold text-lg md:text-lg lg:text-2xl tracking-wider">
            Product Information
          </p>
          <div className="w-full  border border-gray-400" />
        </div>
        {/* Lower */}
        <div className="mt-5">
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[50px] lg:gap-[200px]">
            <p className="lg:min-w-[180px] font-bold text-gray-500">
              PRODUCT DETAILS
            </p>
            <p className="lg:tracking-widest">{data.details}</p>
          </div>
          <div className="flex flex-col md:flex-row lg:gap-[200px] mt-5">
            <p className="lg:min-w-[180px] font-bold text-gray-500">
              PRODUCT CARE
            </p>
            <ul className="mt-2 md:mt-0">
              {data.care.map((item) => (
                <li className="list-disc font-bold ml-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct

export const generateStaticParams = async () => {
  const query = `*[_type == "product"]`
  const res: ProductType[] = await client.fetch(query)
  return res.map((item) => ({ slug: item.slug.current.toString() }))
}
