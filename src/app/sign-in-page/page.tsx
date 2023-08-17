import { SignInButton } from '@clerk/nextjs'
const SignInPage = () => {
  return (
    <div className="flex w-full justify-center mt-[80px]">
      <p className="text-2xl font-bold">You need to sign-in first!</p>
      <SignInButton mode="modal">
        <button className="text-white bg-[#212121] px-8 py-2 rounded-md">
          Sign in
        </button>
      </SignInButton>
    </div>
  )
}
export default SignInPage
