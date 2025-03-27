import {TopNavigationPage} from "@/pages/lucanet/common/navigation/TopNavigationPage";
import {FooterPage} from "@/pages/lucanet/common/FooterPage";
import {Page} from "@playwright/test";
import {Logger} from "@/pages/common/Logger";
import {BasePage} from "@/pages/common/BasePage";
import {expect} from "playwright/test";
import {HeaderPage} from "@/pages/lucanet/common/navigation/HeaderPage";

export class SolutionsPage extends BasePage{

    topNavigationPage: TopNavigationPage<SolutionsPage>;
    headerPage: HeaderPage<SolutionsPage>;
    footerPage: FooterPage<SolutionsPage>;
    readonly page: Page;
    private readonly logger: Logger;
    requestADemoButton;
    downloadSolutionBriefButton;

    constructor( page: Page, logger: Logger) {
        super(page);
        this.page = page;
        this.logger = logger;
        this.requestADemoButton = page.locator('.hero-advanced__button > a:first-of-type');
        this.downloadSolutionBriefButton = page.locator('.hero-advanced__button > a.btn--secondary');
        this.topNavigationPage = new TopNavigationPage<SolutionsPage>(this.page, this.logger, this);
        this.headerPage = new HeaderPage<SolutionsPage>(this.page, this.logger, this);
        this.footerPage = new FooterPage<SolutionsPage>(this.page, this.logger, this);
    }

    async verifyElementsAreDisplayed(): Promise<SolutionsPage> {
        expect(await this.requestADemoButton.isVisible()).toBeTruthy();
        expect(await this.downloadSolutionBriefButton.isVisible()).toBeTruthy();
        return this;
    }
}