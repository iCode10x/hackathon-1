import { Banner2Type } from '@/Types'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { fetchData } from '@/utils/SanityQueries'
const Banner2 = async () => {
  const data: Banner2Type = await fetchData('banner2')

  return (
    <section className="mt-[80px] text-center flex flex-col gap-4">
      {/* Upper texts */}
      <p className="font-bold text-blue-700">PROMOTIONS</p>
      <p className="text-3xl font-bold">Our Promotions Events</p>
      {/* blocks */}
      <div className="flex flex-col lg:flex-row gap-5 ">
        {/* BLOCK 1 */}
        <div className="w-full">
          <div className="bg-[#D6D6D8] flex flex-col md:flex-row justify-between px-5 items-center pt-4 md:pt-0 md:h-[200px] ">
            <div>
              <p className="text-2xl md:text-4xl font-bold">
                {data.mainTexts[0]}
              </p>
              <p className="text-lg ">{data.secondTexts[0]}</p>
            </div>
            <Image
              src={urlForImage(data.images[0]).url()}
              alt="image"
              width={250}
              height={250}
              className="w-[150px] h-[120px] lg:w-[250px] lg:h-[200px] object-cover"
            />
          </div>
          {/* BLOCK 2 */}
          <div className="bg-[#212121] text-white max-h-[200px]  mt-[18px] p-10">
            <p className=" text-4xl font-bold">GET 30% Off</p>
            <p className="mt-4">USE PROMO CODE</p>
            <button className="font-bold text-md md:text-xl bg-gray-100/25 p-1 px-3 md:px-8 rounded-md">
              D I N E W E E K E N D S A L E
            </button>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="bg-[#EFE1C7] max-h-[418px] min-w-[280px]">
          <p className="mt-4">{data.mainTexts[1]}</p>
          <span className="mx-3 line-through">{data.secondTexts[1]}</span>
          <span className="text-lg font-bold">{data.thirdTexts[0]}</span>
          <Image
            src={urlForImage(data.images[1]).url()}
            alt=""
            width={300}
            height={350}
            className="w-[300px] h-[340px]  mt-[10px] mx-auto"
          />
        </div>
        {/* BLOCK 4 */}
        <div className="bg-[#D6D6D8] max-h-[418px] min-w-[280px]">
          <p className="mt-4">{data.mainTexts[2]}</p>
          <span className="mx-3 line-through">{data.secondTexts[2]}</span>
          <span className="text-lg font-bold">{data.thirdTexts[1]}</span>
          <Image
            src={urlForImage(data.images[2]).url()}
            alt=""
            width={300}
            height={350}
            className="w-[300px] h-[340px]  mt-[10px] mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
export default Banner2
