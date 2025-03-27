import { Page } from '@playwright/test';
import {BasePage} from "@/pages/common/BasePage";

export class SearchPage extends BasePage{
    private title = '.content h1';

    constructor(page: Page) {
        super(page);
    }

    async verifyPageIsDisplayed(): Promise<boolean> {
        return await this.waitForElementToBeVisible(this.title);
    }
}