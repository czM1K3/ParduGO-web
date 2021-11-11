import { Resolvers } from "../.cache/__types__";

const resolvers: Resolvers = {
	Query: {
		hello: (test, args) => "Hello!!!",
	},
};

export default resolvers;
