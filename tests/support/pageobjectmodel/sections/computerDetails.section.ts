// Section class" refers to a class that represents a reusable component or section of a web page. 
// Sections are typically used to encapsulate common functionality or elements that appear on multiple pages of a website.

// For example, consider a website that has a navigation bar that appears on every page.
// You can create a NavigationBar section class to represent this component. 
// The NavigationBar class would contain methods to interact with elements within the navigation bar, such as links or buttons.

import { Page } from "@playwright/test";
export default class ComputerDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators here
  createThisComputerButton = () => this.page.getByText("Create this computer");

  // Actions
  public async createComputer() {
    await this.createThisComputerButton().click();
  }
}
