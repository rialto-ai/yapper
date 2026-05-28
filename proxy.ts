import { NextResponse, type NextRequest } from "next/server";

const COOKIE = "cmg-auth";
const TOKEN = "1";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/unlock")) {
    return NextResponse.next();
  }

  if (req.cookies.get(COOKIE)?.value === TOKEN) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  url.search = "";
  url.searchParams.set("next", pathname || "/");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.svg|robots\\.txt|sitemap\\.xml).*)",
  ],
};
