import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import GoogleAnalytics from '@bradgarropy/next-google-analytics'

import Layout from '@/common/components/layouts'
import { METADATA } from '@/common/constant/metadata'

import './globals.css'

const inter = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.openGraph.url),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url
  },
  alternates: {
    canonical: METADATA.openGraph.url
  },
  openGraph: {
    title: METADATA.creator,
    description: METADATA.description,
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.creator,
    description: METADATA.description,
    images: METADATA.profile
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <GoogleAnalytics measurementId={process.env.GTM_ID || ''} />
      </body>
    </html>
  )
}
