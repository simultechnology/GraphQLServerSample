const { ApolloServer, gql } = require('apollo-server-express')
const { typeDefs } = require('./type_defs')
const resolvers = {}
const { mocks } = require('./mocks.js')

// const typeDefs = gql`
// type Query {
// content: String
// }
// `
// const resolvers = {
//   Query: {
//     content: () => 'こんにちは'
//   }
// }

// mocks: trueでMocking機能を有効にする
// const server = new ApolloServer({typeDefs, mocks: true});

const server = new ApolloServer({ typeDefs, resolvers, mocks })

// const server = new ApolloServer({ typeDefs, resolvers })
const express = require('express')
const app = express()
server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 4000 }, () =>
  console.log(
    `Server started at http://localhost:4000${server.graphqlPath}`
  )
)
