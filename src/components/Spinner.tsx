import { Circles } from 'react-loader-spinner'

const Spinner = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        height="50"
        width="50"
        color="#ff0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}
export default Spinner
