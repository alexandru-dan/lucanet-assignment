import { Page } from '@playwright/test';
import {LanguageEnum} from "@/enums/LanguageEnum";
import {BasePage} from "@/pages/common/BasePage";

export class LanguageSelectionPage extends BasePage{
  page: Page;
  private languageDropdown = '.dropdown.show div';

  constructor(page: Page) {
      super(page);
      this.page = page;
  }

  async selectLanguage(language: LanguageEnum) {
     await this.page.locator(this.languageDropdown).waitFor({state: 'visible'});
     await this.page.locator(`${this.languageDropdown} a[title='${language}']`).click();
  }
}