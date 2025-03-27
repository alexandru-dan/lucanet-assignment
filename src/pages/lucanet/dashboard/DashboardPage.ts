import { Logger } from "@/pages/common/Logger";
import {expect, Page} from "@playwright/test";
import {BasePage} from "@/pages/common/BasePage";

export class DashboardPage extends BasePage {
  page: Page;
  private logger: Logger;
  errorMessage;

  constructor(page: Page, logger: Logger) {
    super(page);
    this.page = page;
    this.logger = logger;
    this.errorMessage = page.locator('.error div');
  }

  async verifyErrorIsDisplayed() {
    this.logger.log('Verify that the error message is displayed');
    expect(this.errorMessage.isVisible()).toBeTruthy();
  }

}