import {Page} from "@playwright/test";
import {HomePage} from "@/pages/lucanet/homePage/HomePage";
import {Logger} from "@/pages/common/Logger";
import {PartnerLoginPage} from "@/pages/lucanet/login/PartnerLoginPage";

interface Pages {
    home?: HomePage;
    partnerLogin?: PartnerLoginPage;
}

export class LucanetPages {
    private readonly page: Page;
    private readonly logger: Logger;
    private pages : Pages;

    constructor(page: Page, logger: Logger){
        this.page = page;
        this.logger = logger;
        this.pages = {};
    }

    async home() : Promise<HomePage> {
        if(!this.pages.home){
            this.pages.home = new HomePage(this.page, this.logger);
        }
        return this.pages.home;
    }

    async partnerLogin() : Promise<PartnerLoginPage> {
        if(!this.pages.partnerLogin){
            this.pages.partnerLogin = new PartnerLoginPage(this.page, this.logger);
        }
        return this.pages.partnerLogin;
    }
}