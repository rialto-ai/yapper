import { chromium } from "playwright-core";

const path = process.env.PATHS || "/";
const paths = path.split(",");
const base = process.env.BASE || "http://localhost:3010";
const browserPath =
  process.env.BROWSER_PATH ||
  "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const outDir = process.env.OUT_DIR || "screenshots";

import { mkdirSync } from "node:fs";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: browserPath,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const ctx = await browser.newContext({
  viewport: { width: 1680, height: 1100 },
  deviceScaleFactor: 2,
});

const themes = (process.env.THEMES || "light,dark").split(",");

for (const theme of themes) {
  for (const p of paths) {
    const page = await ctx.newPage();
    await page.addInitScript((t) => {
      try { window.localStorage.setItem("theme", t); } catch {}
    }, theme);
    const url = base + p;
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1800);
    const slug = p === "/" ? "index" : p.replace(/^\//, "").replace(/\//g, "-");
    const out = `${outDir}/${slug}-${theme}.png`;
    await page.screenshot({ path: out, fullPage: true });
    console.log(`wrote ${out}`);
    await page.close();
  }
}
await browser.close();
