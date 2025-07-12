import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Container from "@/components/global/Container"
import Navbar from "@/components/navbar/Navbar"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "React/NextJS eCommerce Store",
  description: "A nifty store built with Next.js"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <Container className="py-20">{children}</Container>
      </body>
    </html>
  )
}
