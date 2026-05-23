import { chromium } from "playwright-core";

const url = process.env.URL || "http://localhost:3010/";
const out = process.env.OUT || "screenshot.png";
const browserPath =
  process.env.BROWSER_PATH ||
  "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const browser = await chromium.launch({
  executablePath: browserPath,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const ctx = await browser.newContext({
  viewport: { width: 1680, height: 1100 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200); // settle animations + chart anims
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(`wrote ${out}`);
