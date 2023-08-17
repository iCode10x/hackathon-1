import { fetchData } from '@/utils/SanityQueries'
import { Banner1Type } from '@/Types'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart } from 'react-icons/bs'
import { urlForImage } from '../../sanity/lib/image'
const Banner1 = async () => {
  const data: Banner1Type = await fetchData('banner1')
  return (
    <section className="flex gap-[120px] justify-between mt-[80px]">
      {/* Left section */}
      <div className="flex flex-col gap-[30px]">
        <div className="text-blue-700 bg-blue-100 font-bold text-center w-[120px] p-2 rounded-md">
          Sale 70%
        </div>
        <p className="text-[57px] font-extrabold">{data.heading}</p>
        <p className="text-gray-800 text-[16px] w-[70%]">{data.paragraph}</p>
        <Link href="/all-products">
          <button className="flex bg-[#212121] text-white items-center w-[150px] gap-[10px] px-4 py-2">
            <BsCart size={20} />
            <span className="font-bold">Start Shopping</span>
          </button>
        </Link>
        <div className="flex gap-6 flex-wrap">
          {data.brands.map((item, i) => (
            <Image
              src={urlForImage(item).url()}
              width={90}
              height={90}
              alt="brand"
              key={i}
            />
          ))}
        </div>
      </div>
      {/* Right section */}
      <div className="hidden lg:block">
        <div className="w-[600px] h-[600px] bg-red-100 rounded-full">
          <Image
            src={urlForImage(data.bannerImage).url()}
            alt=""
            width={800}
            height={600}
            className="w-[800px] h-[600px] object-cover -mt-[30px]"
          />
        </div>
      </div>
    </section>
  )
}
export default Banner1
