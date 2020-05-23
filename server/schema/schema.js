const graphql = require('graphql');
const Book = require("../models/book");
const Author = require("../models/author");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList
} = graphql;


const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				// return authors.find(author => author.id === parent.authorId);
			}
		}
	})
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// return books.filter(books => books.authorId === parent.id);
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				// return books.find(book => book.id === args.id);
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// return authors.find(author => author.id === args.id);
			}
		},
		books: {
			type: GraphQLList(BookType),
			resolve(parent, args) {
				// return books;
			}
		},
		authors: {
			type: GraphQLList(AuthorType),
			resolve(parent, args) {
				// return authors;
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: GraphQLString },
				age: { type: GraphQLInt }
			},
			resolve(parent, args){
				let author = new Author({
					name: args.name,
					age: args.age
				});
				author.save();
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
