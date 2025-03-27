import {test as base, Page, BrowserContext} from '@playwright/test';
import { HomePage } from "../../../src/pages/lucanet/homePage/HomePage";
import {Logger} from "../../../src/pages/common/Logger";
import {LucanetPages} from "../../../src/pages/lucanet/LucanetPages";

type TestFixtures = {
    homePage: HomePage;
    context: BrowserContext;
    page: Page;
    logger: Logger;
    browser: BrowserContext;
    lucanet: LucanetPages;
}

export const test = base.extend<TestFixtures>({
    logger: async ({}, use, testInfo) => {
        await use(new Logger(testInfo.title));
    },
    lucanet: async ({ browser, logger }, use ) => {
        const context = await browser.newContext();
        const cookie = {
            name: 'CookieConsent',
            value: '{stamp:%272wZtVrqBpj0Groghbmbs2eGMmp2E7phJ8QBoF4WENot/9sacGYISuQ==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1742946615683%2Cregion:%27ro%27}',
            domain: 'www.lucanet.com',
            path: '/',
            secure: true,
            httpOnly: false,
            expires: Math.floor(Date.now() / 1000) + 3600,
        };
        await context.addCookies([cookie]);
        const url = process.env.BASE_URL || 'https://www.google.com/';
        const page : Page = await context.newPage();
        await page.goto(url);
        const lucanet = new LucanetPages(page, logger);
        await use(lucanet);
    }
});
export { expect } from '@playwright/test';