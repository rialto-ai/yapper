import { chromium } from "playwright-core";

const browserPath = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const base = process.env.BASE || "https://yapper-chi.vercel.app";
const paths = (process.env.PATHS || "/sign-in,/,/app").split(",");

const browser = await chromium.launch({
  executablePath: browserPath,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 2,
  ignoreHTTPSErrors: true,
});
for (const p of paths) {
  const page = await ctx.newPage();
  const url = base + p;
  let status = 0;
  page.on("response", (r) => { if (r.url() === url) status = r.status(); });
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch (e) {
    console.log(`ERR ${url}: ${e.message}`);
  }
  await page.waitForTimeout(1500);
  const slug = p === "/" ? "vercel-index" : p.replace(/^\//, "").replace(/\//g, "-");
  const out = `screenshots/vercel-${slug}.png`;
  await page.screenshot({ path: out, fullPage: false });
  console.log(`wrote ${out}  (status: ${status})`);
  await page.close();
}
await browser.close();
