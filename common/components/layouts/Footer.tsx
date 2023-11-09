import { USERNAME } from '@/common/constant'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full h-6 p-4 sticky top-0 flex items-center justify-center bg-transparent">@2023 by {USERNAME}</div>
  )
}
