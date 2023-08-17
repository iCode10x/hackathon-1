import Image from 'next/image'
import Logo from '@/assets/Logo.webp'
import { AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { column1, column2, column3 } from '@/utils/FooterData'
const Footer = () => {
  return (
    <div className="mt-[80px]">
      <div className=" flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[100px]">
        {/* COL1 */}
        <div className="flex flex-col gap-5 flex-1">
          <Image src={Logo} alt="logo" width={160} height={160} />
          <p className="text-lg">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4">
            <Link className="p-2 bg-gray-200 rounded-md" href="#">
              <AiOutlineTwitter size={26} />
            </Link>
            <Link className="p-2 bg-gray-200 rounded-md" href="#">
              <BiLogoFacebook size={26} />
            </Link>
            <Link className="p-2 bg-gray-200 rounded-md" href="#">
              <BiLogoLinkedin size={26} />
            </Link>
          </div>
        </div>
        {/* COL2 */}
        <div className="flex flex-col gap-2 min-w-[130px]">
          <p className="text-xl font-bold text-gray-600">Company</p>
          <div className="flex flex-col gap-3">
            {column1.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        {/* COL3 */}
        <div className="flex flex-col gap-2 min-w-[130px] ">
          <p className="text-xl font-bold text-gray-600">Support</p>
          <div className="flex flex-col gap-3">
            {column2.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        {/* COL4 */}
        <div className="flex flex-col gap-2 min-w-[130px]  ">
          <p className="text-xl font-bold text-gray-600">Contact</p>
          <div className="flex flex-col gap-3">
            {column3.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[50px] w-full border-gray-700  border" />
      <div className="flex lg:flex-row flex-col gap-4 justify-between w-full mt-2">
        <p>Copyright © 2022 Dine Market</p>
        <div>
          <span>Design by.</span>{' '}
          <span className="font-bold">Weird Design Studio</span>
        </div>
        <div>
          <span>Code by.</span>{' '}
          <span className="font-bold">Hashir Mahmood</span>
        </div>
      </div>
    </div>
  )
}
export default Footer
