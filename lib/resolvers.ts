import { Resolvers } from "../.cache/__types__";
import { MyContext } from "./types/context";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
	throw new Error("Please define JWT_SECRET");
}

const resolvers: Resolvers<MyContext> = {
	Query: {
		hello: async (_parent, _args, { prisma }) => {
			const users = await prisma.user.findMany({

			});
			console.log(users);
			return "Hello!!!";
		},
		getAllEvents: async (_parent, _args, { prisma, userId }) => {
			const events = await prisma.event.findMany({
				where: {
					end: {
						gt: new Date((new Date).toLocaleString('cs-CZ', {timeZone: 'Europe/Prague' })),
					},
					approved: true,
				},
			});
			return events.map(event => ({
				...event,
				id: `${event.id}`,
				start: `${event.start.getTime()}`,
				end: `${event.end.getTime()}`,
			}));
		},
		getUserEvents: async (_parent, {  }, { prisma, userId }) => {
			if (!userId) throw new Error("User not logged in");
			const events = await prisma.event.findMany({
				where: {
					end: {
						gt: new Date((new Date).toLocaleString('cs-CZ', {timeZone: 'Europe/Prague' })),
					},
					user_id: userId,
				},
			});
			return events.map(event => ({
				...event,
				id: `${event.id}`,
				start: `${event.start.getTime()}`,
				end: `${event.end.getTime()}`,
			}));
		},
	},
	Mutation: {
		login: async (_parent, { email, password }, { prisma }) => {
			const user = await prisma.user.findFirst({
				where: {
					email,
				},
			});
			if (!user) throw new Error("User already exists");
			if (!brcypt.compareSync(password, user.password)) throw new Error("Invalid password");
			const token = jwt.sign({ userId: user.id }, JWT_SECRET);
			return `Bearer ${token}`;
		},
		register: async (_parent, { email, password }, { prisma }) => {
			const user = await prisma.user.findFirst({
				where: {
					email,
				},
			});
			if (user) throw new Error("User already exists");
			const hashedPassword = brcypt.hashSync(password, 10);
			const newUser = await prisma.user.create({
				data: {
					email,
					password: hashedPassword,
				}
			});
			const token = jwt.sign({ userId: newUser.id }, JWT_SECRET); 
			return `Bearer ${token}`;
		},
		createEvent: async (_parent, { input }, { prisma, userId }) => {
			if (!userId) throw new Error("Not authenticated");
			const start = parseInt(input.startTime);
			const end = parseInt(input.endTime);
			if (!start || !end) throw new Error("Invalid time");
			const event = await prisma.event.create({
				data: {
					name: input.name,
					latitude: input.latitude,
					longitude: input.longitude,
					start: new Date(start),
					end: new Date(end),
					category: input.category,
					web: input.web,
					contact_phone: input.contactPhone,
					contact_email: input.contactEmail,
					description: input.description,
					user_id: userId,
				},
			});
			console.log(event);
			return true;
		},
		approveEvent: async (_parent, { id }, { prisma, userId }) => {
			if (!userId) throw new Error("User not logged in");
			const user = await prisma.user.findFirst({
				where: {
					id: userId,
				},
			});
			if (!user) throw new Error("User not found");
			if (!user.admin) throw new Error("User is not admin");
			await prisma.event.update({
				where: {
					id: parseInt(id),
				},
				data: {
					approved: true,
				},
			});
			return true;
		},
	},
};

export default resolvers;
