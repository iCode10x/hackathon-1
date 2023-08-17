'use client'
import SignleProduct from './SingleProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ProductType } from '@/Types'

const Slider = ({ data }: { data: ProductType[] }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      rewind={true}
      freeMode={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.label} className="">
          <SignleProduct {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Slider
