"use client"

import MenuCard from '@/Components/Cards/Menu card/MenuCard'
import MenuCarousel from '@/Components/Carousels/Menu carousel/MenuCarousel'
import React from 'react'

export default function page() {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, }}>
        <MenuCarousel />
      </div>
      <MenuCard />
    </>
  )
}
