import { fetchData } from '@/utils/SanityQueries'
import { urlForImage } from '../../sanity/lib/image'
import { Banner4Type } from '@/Types'
import Image from 'next/image'
import Link from 'next/link'
const Banner4 = async () => {
  const data: Banner4Type = await fetchData('banner4')

  return (
    <div className="mt-[150px] bg-gray-100 relative text-lg flex py-24 xl:px-4 flex-col xl:flex-row">
      <p
        className="text-4xl  xl:text-5xl font-bold xl:w-[500px]  absolute
      xl:right-0  xl:-top-24 -top-16"
      >
        {data.bigText}
      </p>
      <div className="flex gap-10 xl:gap-0">
        {/* Column1 */}
        <div className=" flex flex-col gap-14 mx-5">
          {/* Box1 */}
          <div>
            <p className="font-bold">{data.headings[0]}</p>
            <p className="mt-4">{data.paragraphs[0]}</p>
          </div>
          {/* Box2 */}
          <div>
            <p className="font-bold">{data.headings[1]}</p>
            <p className="mt-4">{data.paragraphs[1]}</p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-14">
          {/* Box1 */}
          <div>
            <p className="font-bold">{data.headings[2]}</p>
            <p className="mt-4">{data.paragraphs[2]}</p>
          </div>
          {/* Box2 */}
          <div>
            <p className="font-bold">{data.headings[3]}</p>
            <p className="mt-4">{data.paragraphs[3]}</p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex flex-col md:flex-row gap-6 mt-12 xl:mt-0">
        <Image
          src={urlForImage(data.image).url()}
          alt=""
          height={300}
          width={400}
          className="object-cover min-w-[280px]"
        />

        {/* Paragraph */}
        <div className="">
          <p className="lg:max-w-[340px] text-md mt-4">{data.bigParagraph}</p>
          <Link href="/all-products">
            <button className="bg-[#212121] p-1 w-[100px] font-bold text-lg text-white mt-6">
              See All Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Banner4
