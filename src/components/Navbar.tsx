'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.webp'
import { NavItems } from '@/utils/NavItems'
import { useAppContext } from '@/context/AppContext'
import { BsJustify } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import CartButton from './CartButton'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  const { search, setSearch } = useAppContext()
  const [navOpen, setNavOpen] = useState(false)
  const router = useRouter()
  return (
    <nav>
      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center relative">
        <Link href="/">
          <Image src={Logo} alt="logo-image" height={100} width={150} />
        </Link>
        <BsJustify size={35} onClick={() => setNavOpen(true)} />
        {navOpen && (
          <div className="absolute w-screen h-screen -top-6 ri -right-6 md:-top-10 md:-right-10 bg-gray-50 z-10 p-10">
            {/* top */}
            <div className="flex justify-between">
              <Link href="/" onClick={() => setNavOpen(false)}>
                <Image src={Logo} alt="logo-image" height={100} width={150} />
              </Link>
              <GrClose size={30} onClick={() => setNavOpen(false)} />
            </div>
            {/* bottom */}
            <div className="mt-[200px] flex flex-col gap-[40px] items-center">
              <div className="flex justify-center">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="text-white bg-[#212121] px-8 py-2 rounded-md">
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex gap-10 items-center">
                    <UserButton />
                    <div
                      onClick={() => setNavOpen(false)}
                      className="flex justify-center"
                    >
                      <CartButton />
                    </div>
                  </div>
                </SignedIn>
              </div>
              <div className="flex flex-col items-center gap-5">
                {NavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.url}
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="text-xl">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Desktop Navbar */}
      <div className="items-center justify-between gap-16 hidden lg:flex">
        <Link href="/">
          <Image src={Logo} alt="logo-image" height={100} width={150} />
        </Link>
        <div className="flex items-center gap-12">
          {NavItems.map((item) => (
            <Link href={item.url} key={item.label}>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="border border-gray-300 flex items-center min-w-[200px] flex-1 pl-2">
          <AiOutlineSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="text-sm p-1 w-full ml-4"
            placeholder="What you looking for"
            onFocus={() => router.push('/search')}
          />
        </div>
        <div className="flex items-center gap-8">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white bg-[#212121] px-8 py-2 rounded-md">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <CartButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
