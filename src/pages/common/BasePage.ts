import { Page } from '@playwright/test';
import {Locator} from "playwright";

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async waitForElementToBeVisible(selectorOrLocator : string | Locator) : Promise<boolean> {
        if (typeof selectorOrLocator === 'string') {

            return this.page.locator(selectorOrLocator).isVisible();
        } else {
            return selectorOrLocator.isVisible();
        }
    }

}
