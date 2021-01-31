# GraphQL Client Comparison

## Table of Contents

- [Clients](#clients)
- [Usage](#usage)
- [Notes](#notes)
  - [apollo client](#@apollo/client)
  - [graphql-hooks](#graphql-hooks)
  - [graphql-request](#graphql-request)
  - [react-query](#react-query)
  - [urql](#urql)

## Clients

(See the [Notes](#notes) section below for some thoughts on each)

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

Included in this project are a GraphQL API and a number of clients to consume this API (implementing roughly the same application).

### Running the API

To start the API, you'll first need to setup the database and then start the server:

```shell
$ cd api
$ bundle install
$ bundle exec rake db:create db:migrate db:seed
$ bundle exec rails server
```

The server should now be running at http://localhost:3000

To test out queries, you can visit http://localhost:3000/graphiql in your browser

### Running the clients

The cleints are located in subdirectories of the `clients` directory. They are named `<library>-client`. Each of them has a `yarn start` command that will run a webpack dev server at some port between 4001 and 4005 (depending on which client you're running.)

To run all clients at the same time:

```shell
$ cd clients
$ yarn start
```

This will start each client on a separate port. The page title should show which client each port corresponds to.

To run any individual client:

```shell
$ cd clients/<client name>
$ yarn
$ yarn start
```

## Notes

### @apollo/client

Apollo Client is probably the best known and most capable client available. Tt was very pleasant ot use and despite being super configurable, it took no time at all to get started with.

If we aren't scared by the relatively large bundle size, this would be my choice. I believe it's the most future-proof of the libraries that will allow us to continually grow more sophisticated in our usage.

**bundle size**

- 126,7 kB (minified)
- 33,9 kB (minified, gzipped)
  https://bundlephobia.com/result?p=@apollo/client@3.3.7

**pros:**

- easy to set up
- really good, thorough documentation
- _many_ configuration possibilities
- pretty advanced caching with no additional setup
  - data is automatically normalized into a flat lookup table
  - unique IDs are automatically generated (this can be customized)
  - [more info](https://www.apollographql.com/docs/react/caching/cache-configuration/)
- apollo also has server and federation libraries (as well as mobile clients)

**cons:**

- bundle size is large compared to the rest

### graphql-hooks

This is advertised as one of the smallest clients out there, but for relative simple usage, it doesn't seem to sacrifice anything. A second library is required for caching, but it's also tiny and _very easy_ to use.

If we want to keep our usage very simple and our bundle small, this might be a good option. I think it could also be a good stepping stone if we don't want to add a larger package until we've invested more into GraphQL.

**bundle size**

- 10,2 kB minified (+ 3,3 kB for memcache)
- 3,6 kB minified + gzipped (+ 1,3 kB for memcache)
  https://bundlephobia.com/result?p=graphql-hooks@5.1.0 &
  https://bundlephobia.com/result?p=graphql-hooks-memcache@2.1.0

**pros:**

- easy to set up
- very small footprint (in terms of bundle size)
- simple, concise API, we're unlikely to be overwhelmed by options

**cons:**

- possible to "grow out of" this, if we need advanced config
- no advanced caching capability

### graphql-request

I'll keep it short: there's no reason to use _only_ this library. The only thing it offers is graphql requests. It can be used with `react-query` to gain some extra capability. It is no easier to set up than other options and it's bundle is larger than graphql-hooks (even with the memcache library)

### react-query

I found this to be the most difficult to use. It isn't built specifically for GraphQL, so it wasn't as straightforward for this use case. I also was unable to get the caching working as expected. An additional library (like `graphql-request` is necessary to actually make the request)

I would say this option should only be considered if we are going to try to use the same library to hit REST endpoints as well as GraphQL.

**bundle size**

- 46,4 kB minified (+ 15,9 kB for graphql-request)
- 10,8 kB minified + gzipped (+ 5,2 kB for graphql-request)
- https://bundlephobia.com/result?p=react-query@3.6.0

**pros**

- the most widely used among these libraries
- possible to use without GraphQL
- highly configurable

**cons**

- requires an additional library for making request
- more difficult to set up than others
- caching wasn't working (at least, not for me...)

### urql

This was the surprise of the bunch. Expectations were relatively low, but it turned out to be the most pleasant to use (just a little more than apollo / graphql-hooks). It has some of the advanced configuration capabilities of apollo, but a very small bundle size.

If Apollo is too large of a library, but we don't want to sacrifice _too much_ capability, then I would choose this library. It has a relatively small userbase (compared to Apollo), but [some of the users are quite impressive](https://formidable.com/open-source/urql/docs/showcase/)

**bundle size**

- 24,6 kB minified
- 7,7 kB minified + gzipped
  https://bundlephobia.com/result?p=urql@1.11.6

**pros**

- easiest to use among the options considered
- very easy to follow, but thorough, documentation
- possibility to grow into it, many advanced config options
- [graphcache](https://bundlephobia.com/result?p=urql@1.11.6) makes advanced caching relatively simple
- small bundle size, big capability

**cons**

- mutation API is somewhat less intuitive
- not quite as many options as apollo, if we want the ability to do _anything_

### relay

I did not (yet!) try out relay. It felt _much_ harder to get started with than the others. It seems to promote best practices for using GraphQL and relies heavily on fragments.

I might try to put together a demo with relay, but I don't think it's a great choice. I believe it would be the hardest for all engineers to get started with and would be more difficult for junior engineers to master.
