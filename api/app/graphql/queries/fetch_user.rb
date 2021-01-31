module Queries
  class FetchUser < Queries::BaseQuery
    type Types::UserType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      User.includes({ reviews: :product }, :purchases).find(id)
    end
  end
end
