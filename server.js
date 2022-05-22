const { ApolloServer, gql } = require("apollo-server");


const users = [{
        id: 1,
        firstName: "Md",
        lastname: "Sakiluzzaman",
        email: "sakil@gmail.com",
        password: "12345"
    },
    {
        id: 2,
        firstName: "Sheikh",
        lastname: "Jalil Ahmed",
        email: "jalil@gmail.com",
        password: "56789"
    },
]


const typeDefs = gql `
  type Query {
   users:[User]
  }

  type User{
    id:ID
    firstName:String
    lastName:String
    email:String
  }
`;

const resolvers = {
    Query: {
        users: () => users
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});