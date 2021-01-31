module Types
  class MutationType < Types::BaseObject
    field :create_product, mutation: Mutations::CreateProduct
    field :create_review, mutation: Mutations::CreateReview
  end
end
