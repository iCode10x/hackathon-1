import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppContext from '@/context/AppContext'

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'Ecommerce app for buying clothes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins p-6 md:p-10 lg:py-8 lg:px-24">
          <AppContext>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </AppContext>
        </body>
      </html>
    </ClerkProvider>
  )
}
