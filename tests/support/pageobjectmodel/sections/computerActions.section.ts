// "Section class" refers to a class that represents a reusable component or section of a web page. 
// Sections are typically used to encapsulate common functionality or elements that appear on multiple pages of a website.

// For example, consider a website that has a navigation bar that appears on every page.
// You can create a NavigationBar section class to represent this component. 
// The NavigationBar class would contain methods to interact with elements within the navigation bar, such as links or buttons.

import { Page } from "@playwright/test";
export default class ComputerActions {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators here
  nameTextbox = () => this.page.locator("#name");
  introducedTextbox = () => this.page.locator("#introduced");
  discontinuedTextbox = () => this.page.locator("#discontinued");
  companySelect = () => this.page.locator("#company");

  // Actions
  public async enterComputerDetails() {
    await this.nameTextbox().fill("CommitQuality");
    await this.introducedTextbox().fill("1999-12-12");
    await this.introducedTextbox().fill("2000-12-12");
    await this.companySelect().selectOption({ label: "Apple Inc." });
  }
}
