"use client"
import React, { useEffect } from 'react'
import Header from './components/Header'

export default function Home() {
  useEffect(() => {
    const coOrdChangeHandler = (event) => {
      let bubble = document.getElementById('bubble')
      bubble.style.background = `radial-gradient(600px at ${event.screenX}px ${event.screenY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    }
    window.addEventListener('mousemove', coOrdChangeHandler)
    return () => {
      window.removeEventListener('mousemove', coOrdChangeHandler);
    }
  }, [])
  return (
    <main
      className="mx-auto duration-300 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <div id='bubble' className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      <Header />
    </main>
  )
}
