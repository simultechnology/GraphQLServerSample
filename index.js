const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./type_defs')

let posts = [
  { id: 1,
    title: 'こんにちは',
    content: '今日は良い天気ですね',
    createdAt: '2018-12-01T00:00:00' },
  { id: 2,
    title: 'こんばんは',
    content: '今日は曇りですね',
    createdAt: '2018-12-02T00:00:00' }
]
let comments = [
  { id: 1,
    content: 'そうですね',
    postId: 1,
    createdAt: '2018-12-01T10:00:00' },
  { id: 2,
    content: 'ちょっと寒いですね',
    postId: 2,
    createdAt: '2018-12-02T10:00:00' },
  { id: 3,
    content: '雨が降りそうですね',
    postId: 2,
    createdAt: '2018-12-02T11:00:00' }
]
const resolvers = {
  Query: {
    posts () {
      return posts
    }
  },
  Post: {
    comments (post) {
      return comments.filter(
        (comment) => { return comment.postId === post.id }
      )
    },
    postedAt (post) {
      return post.createdAt
    }
  },
  Comment: {
    commentedAt (comment) {
      return comment.createdAt
    }
  }
}

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

const server = new ApolloServer({ typeDefs, resolvers })

// const server = new ApolloServer({ typeDefs, resolvers })
const express = require('express')
const app = express()
server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 4000 }, () =>
  console.log(
    `Server started at http://localhost:4000${server.graphqlPath}`
  )
)
