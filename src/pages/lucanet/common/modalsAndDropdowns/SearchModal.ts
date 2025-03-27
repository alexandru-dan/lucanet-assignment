import {expect, Page} from '@playwright/test';
import {SearchPage} from "@/pages/lucanet/SearchPage";
import {BasePage} from "@/pages/common/BasePage";

export class SearchModal<DERIVED> extends BasePage {
    page: Page;
    readonly inputField;
    readonly searchButton ;
    readonly closeButton;

    constructor(page: Page, protected parent: DERIVED) {
        super(page);
        this.page = page;
        this.inputField = page.locator('#search-modal input');
        this.searchButton = page.locator("#search-modal button[type='submit']");
        this.closeButton = page.locator('.modal-header > button');
    }

    async searchText(text: string): Promise<SearchPage> {
        await this.inputField.fill(text);
        await this.searchButton.click();
        return new SearchPage(this.page);
    }

    async verifyElementsAreDisplayed(): Promise<this> {
        expect(this.inputField.isVisible()).toBeTruthy();
        expect(this.searchButton.isVisible()).toBeTruthy();
        expect(this.closeButton.isVisible()).toBeTruthy();
        return this;
    }

    async closeSearchModal() {
        await this.closeButton.click();
        return this.parent;
    }
}