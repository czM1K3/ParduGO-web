import { NextPageContext } from "next";
import { MyContext } from "./types/context";
import { MyToken } from "./types/token";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
	throw new Error("Please define JWT_SECRET");
}

const prisma = new PrismaClient();

export const myContext = async ({
	req,
}: NextPageContext): Promise<MyContext> => {
	if (!req) return { userId: null, prisma };

	const authHeader = req.headers.authorization;
	if (!authHeader) return { userId: null, prisma };

	const token = authHeader.split(" ")[1];
	if (!token || token === "") return { userId: null, prisma };

	let decoded: MyToken;
	try {
		decoded = jwt.verify(token, JWT_SECRET) as MyToken;
	} catch {
		return { userId: null, prisma };
	}

	return {
		userId: decoded.userId,
		prisma,
	};
};