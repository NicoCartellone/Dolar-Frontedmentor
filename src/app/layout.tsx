import './globals.css'
import { Space_Mono } from 'next/font/google'

const SpaceMono = Space_Mono({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'Dólar App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={SpaceMono.className}>
        <main className='flex items-center justify-center h-screen bg-[#C5E4E7]'>
          <div className='flex flex-col flex-1 max-w-screen-lg px-4 mx-auto min-h-[480px]'>
            <div className='grid flex-1 w-full h-full p-8 bg-white shadow-lg rounded-3xl'>{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
} 
