import React from 'react'

import { METADATA } from '@/common/constant/metadata'

import Project from '@/modules/project'

export const metadata = {
  title: `Project Page | ${METADATA.creator}`,
  description: 'Menampilkan list project'
}

export default function page() {
  return <Project />
}
