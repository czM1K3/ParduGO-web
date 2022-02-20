import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
	const authorization = req.cookies['authorization'];
	if (!authorization) {
		const url = req.nextUrl.clone();
		url.pathname = '/prihlaseni';
		return NextResponse.redirect(url);
	}
};
