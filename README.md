# GraphQL Client Comparison

## Table of Contents
- [Clients](#clients)
- [Usage](#usage)
- [Notes](#notes)
  - [Summary](#summary)
  - [apollo client](#apollo-client)
  - [graphql-hooks](#graphql-hooks)
  - [graphql-request](#graphql-request)
  - [react-query](#react-query)
  - [urql](#urql)

## Clients

- [@apollo/client](https://github.com/apollographql/apollo-client)
- [graphql-hooks](https://github.com/nearform/graphql-hooks)
- [graphql-request](https://github.com/prisma-labs/graphql-request)
- [react-query (+ graphql-request)](https://github.com/tannerlinsley/react-query)
- [urql](https://github.com/FormidableLabs/urql)

### Clients Not Considered (yet!)

- [relay](https://github.com/facebook/relay)
- [graphqurl](https://github.com/hasura/graphqurl)
- [lokka](https://github.com/kadirahq/lokka)
- [nanographql](https://github.com/choojs/nanographql)
- [grafoo](https://github.com/grafoojs/grafoo)

## Usage

Included in this project are a GraphQL API and a number of clients to consume this API (implementing roughly the same implementation).

## Running the API

To start the API, you'll first need to setup the database and then start the server:

```shell
$ cd api
$ bundle install
$ bundle exec rake db:create db:migrate db:seed
```

The server should now be running at http://localhost:3000

To test out queries, you can visit http://localhost:3000/graphiql in your browser

## Running the clients

The cleints are located in subdirectories of the `clients` directory.  They are named `<library>-client`.  Each of them has a `yarn start` command that will run a webpack dev server at some port between 4001 and 4005 (depending on which client you're running.)

To run all clients at the same time:

```shell
$ cd clients
$ yarn start
```

This will start each client on a separate port.  The page title should show which client each port corresponds to.

To run any individual client:

```shell
$ cd clients/<client name>
$ yarn
$ yarn start
```

