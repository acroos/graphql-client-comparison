module Mutations
  class CreateProduct < Mutations::BaseMutation
    null true

    argument :name, String, required: true
    argument :price, Float, required: true

    field :product, Types::ProductType, null: true
    field :errors, [String], null: false

    def resolve(name:, price:)
      product = Product.new(name: name, price: price)
      if product.save
        {
          product: product,
          errors: []
        }
      else
        {
          product: nil,
          errors: product.errors.full_messages
        }
      end
    end
  end
end
