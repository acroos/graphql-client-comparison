import React from 'react'
import { Product } from '../types'

import './ProductListItem.css'

type Props = {
  product: Product
}

export default function ProductListItem({ product }: Props) {
  return (
    <div
      style={{
        border: '1px dashed grey',
        height: 80,
        width: 240,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
      }}
    >
      <h3 style={{ margin: 0 }}>{product.name}</h3>
      <small style={{ margin: 0 }}>( ${product.price} )</small>
    </div>
  )
}
