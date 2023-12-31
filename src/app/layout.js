import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishit Chaturvedi',
  description: 'I build exceptional and accessible digital experiences for the web.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth focus:scroll-auto'>
      <body className={`${inter.className} bg-[#031932] relative leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>
        {children}
      </body>
    </html>
  )
}
