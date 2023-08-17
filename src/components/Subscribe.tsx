const Subscribe = () => {
  return (
    <section className="mt-[80px] relative flex flex-col items-center p-6 gap-6">
      <p className="-z-20 font-bold text-7xl md:text-8xl lg:text-9xl absolute top-[35%] md:top-[10%] opacity-10">
        Newsletter
      </p>
      <p className="font-bold text-4xl text-center">Subscribe Our Newsletter</p>
      <p className="tracking-wider  text-center">
        Get the latest information and promo offers directly
      </p>
      <div className="flex md:flex-row items-center flex-col gap-6">
        <input
          type="text"
          className="border border-black px-8 py-2 w-[300px] md:w-[450px]"
          placeholder="Input email address"
        />
        <button className="max-w-[130px] bg-black text-white px-3 py-2">
          Get Started
        </button>
      </div>
    </section>
  )
}
export default Subscribe
