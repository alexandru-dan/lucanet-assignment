import {expect, Page} from '@playwright/test';
import { PartnerLoginPage } from "@/pages/lucanet/login/PartnerLoginPage";
import {LanguageEnum} from "@/enums/LanguageEnum";
import {LanguageSelectionPage} from "@/pages/lucanet/common/modalsAndDropdowns/LanguageSelectionPage";
import {SearchModal} from "@/pages/lucanet/common/modalsAndDropdowns/SearchModal";
import {Logger} from "@/pages/common/Logger";
import {BasePage} from "@/pages/common/BasePage";

export class TopNavigationPage<DERIVED> extends BasePage {
    readonly page: Page;
    private readonly logger : Logger;
    readonly ads;
    readonly changeLanguageButton;
    readonly searchButton ;
    readonly careersButton;
    readonly partnerLoginButton ;
    readonly customerLoginButton ;

    constructor(page: Page, logger: Logger, protected parent: DERIVED ) {
        super(page);
        this.page = page;
        this.logger = logger;
        this.ads = page.locator('#stickybar46816');
        this.changeLanguageButton =  page.locator('.lnet-top-menu button.language-switcher-button');
        this.searchButton = page.locator('.lnet-top-menu button.btn--search input');
        this.careersButton = page.locator("//div[@class='lnet-top-menu']//div[2]//li[2]");
        this.partnerLoginButton = page.locator("//div[@class='lnet-top-menu']//div[2]//li[3]");
        this.customerLoginButton = page.locator("//div[@class='lnet-top-menu']//div[2]//li[4]");
    }

    async closeAd() : Promise<DERIVED> {
        const adButton = this.ads.locator('button');
        await adButton.click();
        return this.parent;
    }

    async changeLanguage(language : LanguageEnum ): Promise<DERIVED> {
        await this.changeLanguageButton.click();
        const languageSelectionPage = new LanguageSelectionPage(this.page);
        await languageSelectionPage.selectLanguage(language);
        return this.parent;
    }

    async verifyElementsAreDisplayed(): Promise<DERIVED> {
        expect(await this.changeLanguageButton.isVisible()).toBeTruthy();
        expect(await this.searchButton.isVisible()).toBeTruthy();
        expect(await this.careersButton.isVisible()).toBeTruthy();
        expect(await this.partnerLoginButton.isVisible()).toBeTruthy();
        expect(await this.customerLoginButton.isVisible()).toBeTruthy();
        return this.parent;
    }

    async openSearchModal() : Promise<SearchModal<DERIVED>> {
        await this.searchButton.click();
        return new SearchModal(this.page, this.parent);
    }

    async goToCareers() {
        await this.careersButton.click();
    }

    //example of method chaining
    async goToPartnerLogin(): Promise<PartnerLoginPage> {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'), // Wait for new tab
            this.partnerLoginButton.click(), // Click Login button
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return new PartnerLoginPage(newPage, this.logger);
    }

    async goToCustomerLogin() {
        await this.customerLoginButton.click();
    }

}
