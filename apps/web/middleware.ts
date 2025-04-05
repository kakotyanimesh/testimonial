import { NextRequest, NextResponse } from "next/server";
import { verrifyToken } from "./utils/api";

export async function middleware(req:NextRequest) {
  
  const token = await req.cookies.get("Access_token")?.value

  // console.log(token);

  if(!token){
    return NextResponse.redirect(new URL("/signin", req.url))
  }
  
  try {
    const res = await verrifyToken(token)

    console.log(`middleware res log ${res}`);
    
    return NextResponse.next()
  } catch (error) {
    console.error(`middle ware error ${error}`)
    return NextResponse.redirect(new URL("/signin", req.url))
  }

}


export const config = {
  matcher: ['/dashboard/:path*', '/dashboard', '/spaces', '/spaces/:path*', '/testimonialform', '/testimonialform/:path*'],
}