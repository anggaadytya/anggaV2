import { Metadata } from 'next'

import React from 'react'

import { METADATA } from '@/common/constant/metadata'

import About from '@/modules/about'

export const metadata: Metadata = {
  title: `About Page | ${METADATA.creator}`,
  description: 'Menampilkan informasi tentang Angga Adytya'
}

export default function page() {
  return <About />
}
