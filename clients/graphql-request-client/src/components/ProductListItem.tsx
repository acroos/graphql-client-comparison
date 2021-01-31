import React from 'react'
import { Product } from '../types'

import './ProductListItem.css'

type Props = {
  product: Product
}
export default function ProductListItem({ product }: Props) {
  return (
    <div className="product-box">
      <span>
        <h3>
          {product.name} <small>( ${product.price} )</small>
        </h3>
      </span>
    </div>
  )
}
