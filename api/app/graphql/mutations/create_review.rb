module Mutations
  class CreateReview < Mutations::BaseMutation
    null true

    argument :user_id, ID, required: true
    argument :product_id, ID, required: true
    argument :body, String, required: false

    field :review, Types::ReviewType, null: true
    field :errors, [String], null: false

    def resolve(user_id:, product_id:, body: nil)
      user = User.find(user_id)
      product = Product.find(product_id)

      review = Review.new(user: user, product: product, body: body)
      if review.save
        {
          review: review,
          errors: []
        }
      else
        {
          review: nil,
          errors: review.errors.full_messages
        }
      end
    rescue ActiveRecord::RecordNotFound
      raise GraphQL::ExecutionError, 'User or product not found'
    end
  end
end
