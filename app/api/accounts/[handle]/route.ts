import { NextResponse } from "next/server";
import { getAccount, getSimilarAccounts, getTopPosts } from "@/lib/data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ handle: string }> },
) {
  const { handle } = await params;
  const account = await getAccount(handle);
  if (!account) return NextResponse.json({ error: "not found" }, { status: 404 });
  const [similar, posts] = await Promise.all([
    getSimilarAccounts(account.handle),
    getTopPosts(account.handle),
  ]);
  return NextResponse.json({ account, similar, posts });
}
