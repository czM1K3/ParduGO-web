import type { PrismaClient } from "@prisma/client"

export type MyContext = {
	userId: number | null;
	prisma: PrismaClient;
};