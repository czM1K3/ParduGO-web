import { NextPageContext } from "next";
import { MyContext } from "./types/context";
import { MyToken } from "./types/token";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
	throw new Error("Please define JWT_SECRET");
}

export const myContext = async ({
	req,
}: NextPageContext): Promise<MyContext> => {
	if (!req) return { userId: null };

	const authHeader = req.headers.authorization;
	if (!authHeader) return { userId: null };

	const token = authHeader.split(" ")[1];
	if (!token || token === "") return { userId: null };

	let decoded: MyToken;
	try {
		decoded = jwt.verify(token, JWT_SECRET) as MyToken;
	} catch {
		return { userId: null };
	}

	return {
		userId: decoded.userId,
	};
};