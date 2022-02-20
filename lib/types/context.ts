export type MyContext = {
	userId: number | null;
	revalidate: (urlPath: string) => Promise<void>;
};
