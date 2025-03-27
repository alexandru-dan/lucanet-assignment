import { Page } from "@playwright/test";
import {DashboardPage} from "@/pages/lucanet/dashboard/DashboardPage";
import {Logger} from "@/pages/common/Logger";
import {BasePage} from "@/pages/common/BasePage";

export class PartnerLoginPage extends BasePage{
  readonly page: Page;
  private logger : Logger;
  private usernameField = "#sfdc_username_container input";
  private passwordField = "#sfdc_password_container input";
  private loginButton = "button[data-aura-rendered-by]";

  constructor(page: Page, logger : Logger) {
    super(page);
    this.page = page;
    this.logger = logger;
  }

  async login(username: string, password: string) : Promise<DashboardPage> {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
    return new DashboardPage(this.page, this.logger);
  }

    async insertUsername(username: string) {
    await this.page.fill(this.usernameField, username);
    return this;
  }

    async insertPassword(password: string) {
        await this.page.fill(this.passwordField, password);
        return this;
    }

    async clickLoginButton(): Promise<DashboardPage> {
        await this.page.click(this.loginButton);
        return new DashboardPage(this.page, this.logger);
    }

}