import React from 'react'

import { METADATA } from '@/common/constant/metadata'

import Skills from '@/modules/skills'

export const metadata = {
  title: `Skills Page | ${METADATA.creator}`,
  description: 'Menampilkan list Skills'
}
export default function page() {
  return <Skills />
}
