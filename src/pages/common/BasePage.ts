// src/pages/BasePage.ts
import { Page } from '@playwright/test';
import {Selector} from "@typescript-eslint/eslint-plugin/dist/rules/naming-convention-utils";
import {Locator} from "playwright";
const sleep = (s: number) => new Promise((r) => setTimeout(r, s * 1000));

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Wait for the page to be fully loaded
    private async waitForPageToLoad(timeout: number = 30000) {
        try {
            await this.page.waitForLoadState('load', { timeout });
            await this.page.waitForSelector('body', { timeout }); // Optional: Ensure the body element is rendered
        } catch (error: any) {
            console.error(`Failed to load page within ${timeout}ms: ${error.message}`);
            throw error;
        }
    }

    protected async waitForElementToBeVisible(selectorOrLocator : string | Locator) : Promise<boolean> {
        if (typeof selectorOrLocator === 'string') {

            return this.page.locator(selectorOrLocator).isVisible();
        } else {
            return selectorOrLocator.isVisible();
        }
    }

}
