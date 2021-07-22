const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");

const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => "hello world!"
};

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(3000, () => {
  console.log("listen on port 3000")
});
