import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nomework',
  description: 'This web application leverages Gemini AI to generate text based on user prompts and presents the output in a manuscript-styled manner.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Homemade+Apple|Roboto|Caveat|Liu+Jian+Mao+Cao&display=swap"
    />
      </head>
      <body className={inter.className}>
        
    <script defer src="https://unpkg.com/jspdf@^1/dist/jspdf.min.js"></script>
    <Navbar/>
        {children}</body>
    </html>
  )
}
