"use client"

import MenuCard from '@/Components/Cards/Menu card/MenuCard'
import MenuCarousel from '@/Components/Carousels/Menu carousel/MenuCarousel'
import Navbar from '@/Components/Navbar/Navbar'
// import { CartProvider } from '@/context/CartContext'
import React from 'react'
import { CartProvider } from 'react-use-cart'

export default function page() {
  return (
    <CartProvider>
      <div className='z-8'>
        <Navbar />
      </div>

      <div className='z-10' style={{ position: 'sticky', top: 0 }}>
        <MenuCarousel />
      </div>

      <MenuCard />
    </CartProvider>
  )
}