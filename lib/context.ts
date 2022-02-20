import { NextApiRequest, NextApiResponse } from 'next';
import { MyContext } from './types/context';
import { MyToken } from './types/token';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
	throw new Error('Please define JWT_SECRET');
}

export const myContext = async ({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<MyContext> => {
	if (!req) return { userId: null, revalidate: res.unstable_revalidate };

	let authHeader = req.headers.authorization;
	if (!authHeader && req) authHeader = req.cookies['authorization'];
	if (!authHeader) return { userId: null, revalidate: res.unstable_revalidate };

	const token = authHeader.split(' ')[1];
	if (!token || token === '')
		return { userId: null, revalidate: res.unstable_revalidate };

	let decoded: MyToken;
	try {
		decoded = jwt.verify(token, JWT_SECRET) as MyToken;
	} catch {
		return { userId: null, revalidate: res.unstable_revalidate };
	}

	return {
		userId: decoded.userId,
		revalidate: res.unstable_revalidate,
	};
};
