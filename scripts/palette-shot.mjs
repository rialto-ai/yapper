import { chromium } from "playwright-core";

const browserPath = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const browser = await chromium.launch({
  executablePath: browserPath,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const ctx = await browser.newContext({
  viewport: { width: 1680, height: 1000 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto("http://localhost:3010/app", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.keyboard.press("Meta+K");
await page.waitForTimeout(400);
await page.screenshot({ path: "screenshots/palette-light.png", fullPage: false });
console.log("wrote screenshots/palette-light.png");

await page.fill('input[placeholder*="Search"]', "teknium");
await page.waitForTimeout(400);
await page.screenshot({ path: "screenshots/palette-search-light.png", fullPage: false });
console.log("wrote screenshots/palette-search-light.png");

await browser.close();
