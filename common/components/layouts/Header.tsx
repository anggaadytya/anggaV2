"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-300 shadow-xl md:w-[70%] mx-auto my-4 h-6 p-8 sticky top-0 flex items-center justify-center z-50 rounded-2xl">
      <nav className="w-full flex justify-between items-center">
        <h1>Muhammad Angga Adytya</h1>
        <ul id='nav' className="hidden md:flex gap-4 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="skills">skills</Link>
          </li>
          <li>
            <Link href="project">Project</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
        </ul>
      </nav>
        <button 
        className='md:hidden'
        onClick={() => {
          const nav = document.getElementById('nav')
          if (nav) {
            nav.classList.toggle('hidden')
          }
        }}
        >X</button>
    </header>
  )
}
