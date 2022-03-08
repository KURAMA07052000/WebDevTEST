const puppeteer = require('puppeteer');
async function main() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForTimeout(5000); // wait for 5 seconds
    await page.click('#submit');
    await page.waitForTimeout(5000); // wait for 5 seconds
    await browser.close();
}
main();
