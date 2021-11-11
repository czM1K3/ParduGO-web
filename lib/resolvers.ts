import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../.cache/__types__";
import { MyContext } from "./types/context";

const resolvers: Resolvers<MyContext> = {
	Query: {
		hello: async (test, args, { prisma }) => {
			const client = new PrismaClient();
			const users = await client.user.findMany({
				
			});
			console.log(users);
			return "Hello!!!";
		},
	},
};

export default resolvers;
