import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    members: [Member!]!
    execute: String
  }

  type Member {
    id: Int
    name: String
    age: Int
    part: String
    random: Int
  }
`

const resolvers = {
  Query: {
    members: () => [
      {
        id: 1,
        name: 'いぬ',
        age: '25',
        part: 'guitar',
        random: Math.floor(Math.random() * 10),
      },
      {
        id: 2,
        name: 'キリン',
        age: '28',
        part: 'drums',
        random: Math.floor(Math.random() * 10),
      },
      {
        id: 3,
        name: 'ゴリラ',
        age: '20',
        part: 'vocal',
        random: Math.floor(Math.random() * 10),
      },
    ],
    execute: () => {
      console.log('うおおお')
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler({
  path: '/api/graphql',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
