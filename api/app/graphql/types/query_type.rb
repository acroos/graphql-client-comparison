module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_user, Types::UserType, resolver: Queries::FetchUser, null: true,
                                        description: 'Fetch a single user by ID'

    field :fetch_products, [Types::ProductType], resolver: Queries::FetchProducts, null: false,
                                                 description: 'Fetch all product'

    field :fetch_product, Types::ProductType, resolver: Queries::FetchProduct, null: true,
                                              description: 'Fetch a single product by ID'
  end
end
