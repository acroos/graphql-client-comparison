import React, { useState } from 'react'
import { OperationContext, useMutation } from 'urql'
import { CreateProductResponse, CreateProductVariables } from '../types'

const MUTATION = `
  mutation CreateProduct($name: String!, $price: Float!) {
    createProduct(input: { name: $name, price: $price }) {
      product {
        id
      }
      errors
    }
  }
`

type Props = {
  reexecuteQuery: (opts?: Partial<OperationContext> | undefined) => void
}

export default function NewProduct({ reexecuteQuery }: Props) {
  const [newProductName, setNewProductName] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [addProductResult, addProduct] = useMutation<
    CreateProductResponse,
    CreateProductVariables
  >(MUTATION)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 160,
        width: '100%',
        border: '1px dotted cyan',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <strong>New Product</strong>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addProduct({
            name: newProductName!,
            price: +newProductPrice!,
          }).then(() => reexecuteQuery())
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            placeholder="Name"
            style={{ padding: 4, margin: 8 }}
            value={newProductName}
            type="text"
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <input
            placeholder="Price"
            style={{ padding: 4, margin: 8 }}
            value={newProductPrice}
            type="number"
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
          <button type="submit" disabled={!newProductName || !newProductPrice}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}
