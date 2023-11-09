import Home from '@/modules/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page | Angga Adytya',
  description: 'Merupakan Portofolio Angga Adytya',
  openGraph: {
    title: 'Home Page | Angga Adytya'
  },
  twitter: {
    title: 'Home Page | Angga Adytya'
  }
}

export default function HomePage() {
  return <Home />
}
