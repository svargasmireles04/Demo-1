//Page Classes: Each web page is represented by a dedicated class that contains methods to interact with the elements on that page. 
//For example, you might have a LoginPage class for the login page, a HomePage class for the home page, and so on.

import { expect, Page } from "@playwright/test";
export default class ComputersPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Add a goto method into each page I create
  public async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers");
  }

  // Locators here
  addComputerButton = () => this.page.getByText("Add a new computer");
  computerAddedLabel = () =>
    this.page.getByText("Done ! Computer Feldco has been created");

  // Actions
  public async clickAddNewComputer() {
    await this.addComputerButton().click();
  }
  public async assertNewComputerAdded() {
    await expect(this.computerAddedLabel()).toBeVisible();
  }
}
