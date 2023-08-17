'use client'
import Spinner from '@/components/Spinner'
const Loading = () => {
  return (
    <div className="flex justify-center mt-[80px]">
      <Spinner message="Loading cart items" />
    </div>
  )
}
export default Loading
