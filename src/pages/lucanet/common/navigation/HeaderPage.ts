import {expect, Page} from "@playwright/test";
import {Logger} from "@/pages/common/Logger";
import {HeaderEntries} from "@/enums/HeaderEntries";
import {BasePage} from "@/pages/common/BasePage";

export class HeaderPage<DERIVED> extends BasePage {
    readonly page: Page;
    private readonly logger: Logger;
    logo;
    solutionsEntry;
    platformEntry;
    customersEntry;
    resourcesEntry;
    aboutUsEntry;
    requestDemoEntry;

    constructor(page: Page, logger: Logger, protected parent: DERIVED) {
        super(page);
        this.page = page;
        this.logger = logger;
        this.logo = page.locator('.header__logo');
        this.solutionsEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[1]/a");
        this.platformEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[2]/a");
        this.customersEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[3]/a");
        this.resourcesEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[4]/a");
        this.aboutUsEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[5]/a");
        this.requestDemoEntry = page.locator("(//div[@id='navbarSupportedContent']/ul/li)[6]/a");
    }

    async verifyElementsAreDisplayed(): Promise<DERIVED> {
        expect(await this.logo.isVisible()).toBeTruthy();
        expect(await this.solutionsEntry.isVisible()).toBeTruthy();
        expect(await this.platformEntry.isVisible()).toBeTruthy();
        expect(await this.customersEntry.isVisible()).toBeTruthy();
        expect(await this.resourcesEntry.isVisible()).toBeTruthy();
        expect(await this.aboutUsEntry.isVisible()).toBeTruthy();
        expect(await this.requestDemoEntry.isVisible()).toBeTruthy();
        return this.parent;
    }

    async clickEntry(entry: HeaderEntries): Promise<DERIVED> {
        switch (entry) {
            case HeaderEntries.Solutions:
                await this.solutionsEntry.click();
                break;
            case HeaderEntries.Platform:
                await this.platformEntry.click();
                break;
            case HeaderEntries.Customers:
                await this.customersEntry.click();
                break;
            case HeaderEntries.Resources:
                await this.resourcesEntry.click();
                break;
            case HeaderEntries.AboutUs:
                await this.aboutUsEntry.click();
                break;
            case HeaderEntries.RequestDemo:
                await this.requestDemoEntry.click();
                break;
        }
        return this.parent;
    }
}