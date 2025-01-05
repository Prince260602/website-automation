import puppeteer from "puppeteer";

(async function () {
  try {
    console.log("Starting browser automation...");
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: true,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    console.log("Browser launched");

    const pages = await browser.pages();
    const page = pages[0];
    console.log("Got all tabs");

    await page.goto("https://www.google.com/");
    console.log("Google page opened");

    await page.waitForSelector(".gLFyf.gsfi", { visible: true });

    await page.type(".gLFyf.gsfi", "geeksforgeeks");
    console.log("Website name is typed");

    await page.keyboard.press("Enter");
    console.log("Enter key pressed");

    await page.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });

    await page.click(".LC20lb.MBeuO.DKV0Md");
    console.log("Website opened");
  } catch (err) {
    console.error(err);
  }

  console.log("start");
})();
