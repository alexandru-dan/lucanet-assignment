import { Logger } from "@/pages/common/Logger";
import { Page } from "@playwright/test";
import {BasePage} from "@/pages/common/BasePage";

export class DashboardPage extends BasePage {
  page: Page;
  private logger: Logger;

  constructor(page: Page, logger: Logger) {
    super(page);
    this.page = page;
    this.logger = logger;
  }

}