module Types
  class UserType < Types::BaseObject
    field :name, String, null: true
    # field :purchased_products, [Types::ProductType], null: false
    field :reviews, [Types::ReviewType], null: false
  end
end
