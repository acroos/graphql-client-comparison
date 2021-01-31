module Queries
  class FetchProduct < Queries::BaseQuery
    type Types::ProductType, null: false
    argument :product_id, Integer, required: true

    def resolve(product_id:)
      Product.includes(reviews: :user).find(product_id)
    end
  end
end
