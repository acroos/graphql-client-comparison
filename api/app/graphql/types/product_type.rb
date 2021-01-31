module Types
  class ProductType < Types::BaseObject
    field :id, Integer, null: false
    field :name, String, null: true
    field :price, Float, null: true
    field :reviews, [Types::ReviewType], null: false
    field :review_count, Integer, null: false

    def review_count
      object.reviews.count
    end
  end
end
