module Types
  class ReviewType < Types::BaseObject
    field :id, Integer, null: false
    field :body, String, null: true
    field :user_name, String, null: false
    field :product_name, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def user_name
      object.user.name
    end

    def product_name
      object.product.name
    end
  end
end
