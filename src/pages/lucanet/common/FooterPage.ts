import {BasePage} from "@/pages/common/BasePage";
import {Logger} from "@/pages/common/Logger";
import {expect, Locator, Page} from "@playwright/test";

export class FooterPage<DERIVED> extends BasePage {

    readonly page: Page;
    private logger: Logger;
    readonly contactUs: Locator ;
    readonly support: Locator;

    constructor(page: Page, logger: Logger, protected parent: DERIVED) {
        super(page);
        this.page = page;
        this.logger = logger;
        this.contactUs = page.locator('//footer/div[2]/div/div[4]//li[1]');
        this.support = page.locator('//footer/div[2]/div/div[4]//li[2]');

    }

    async verifyElementsAreDisplayed(): Promise<DERIVED> {
        expect(await this.contactUs.isVisible()).toBeTruthy();
        expect(await this.support.isVisible()).toBeTruthy();
        return this.parent;
    }

}