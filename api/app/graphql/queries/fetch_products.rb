module Queries
  class FetchProducts < Queries::BaseQuery
    type [Types::ProductType], null: false

    def resolve
      Product.includes(reviews: :user).all.order(created_at: :desc)
    end
  end
end
