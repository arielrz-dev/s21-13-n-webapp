import React from 'react'
import ProductCard from '@/components/Products/ProductCard'

export default function ProductPage() {
  return (
    <div>ProductPage
        <ProductCard
        id= {1}
        image="/images/limon.jpg"
        name="Limón"
        price= {200.5}
        />
    </div>
  )
}
