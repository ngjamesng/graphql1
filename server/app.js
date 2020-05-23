require("dotenv").config(); //enables usage of environment variables

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const mongoose = require("mongoose");
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const mongoDB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@gql-ngjamesng-slvid.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoDB_URI, {
	useNewUrlParser: true, useUnifiedTopology: true
});
mongoose.connection.once("open", () => console.log("connected to mongoDB"));

// bind express with graphql
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('now listening for requests on port 4000');
});
