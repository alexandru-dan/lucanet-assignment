import { Page } from '@playwright/test';
import {TopNavigationPage} from "@/pages/lucanet/common/navigation/TopNavigationPage";
import {BasePage} from "@/pages/common/BasePage";
import {Logger} from "@/pages/common/Logger";
import {FooterPage} from "@/pages/lucanet/common/FooterPage";
import {HeaderPage} from "@/pages/lucanet/common/navigation/HeaderPage";
import {SolutionsPage} from "@/pages/lucanet/solutions/SolutionsPage";

export class HomePage extends BasePage{

  topNavigationPage: TopNavigationPage<HomePage>;
  headerPage: HeaderPage<HomePage>;
  footerPage: FooterPage<HomePage>;
  readonly page: Page;
  private readonly logger: Logger;
  readonly requestDemoButton;
  readonly exploreSolutionsButton;


  constructor(page: Page, logger: Logger) {
    super(page);
    this.page = page;
    this.logger = logger;
    this.requestDemoButton = page.locator('.hero-advanced__button > a.btn.btn.btn--white');
    this.exploreSolutionsButton = page.locator('.hero-advanced__button > a.btn.btn.btn--secondary');
    this.topNavigationPage = new TopNavigationPage<HomePage>(this.page, this.logger, this);
    this.headerPage = new HeaderPage<HomePage>(this.page, this.logger, this);
    this.footerPage = new FooterPage<HomePage>(this.page, this.logger, this);
  }

  async requestADemo(): Promise<void> {
    await this.requestDemoButton.click();
  }

  async exploreSolutions(): Promise<SolutionsPage> {
    await this.exploreSolutionsButton.click();
    return new SolutionsPage(this.page, this.logger);
  }
}