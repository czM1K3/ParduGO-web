import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    const authorization = req.cookies["authorization"];    
    if (authorization) {
        return NextResponse.redirect("/administrace");
    }
}