import { test, expect } from "@playwright/test";
import AddComputerPage from "./support/pageobjectmodel/pages/addComputer.page";
import ComputersPage from "./support/pageobjectmodel/pages/computers.page";

// Test to add a new computer using basic selectors
test("basic test", async ({ page }) => {
  // Navigate to the computers page
  await page.goto("https://computer-database.gatling.io/computers");
  
  // Click on the "Add a new computer" button
  await page.getByText("Add a new computer").click();
  
  // Fill in the form fields with computer information
  await page.locator("#name").fill("Feldco");
  await page.locator("#introduced").fill("1999-12-12");
  await page.locator("#discontinued").fill("2000-12-12");
  await page.locator("#company").selectOption({ label: "Apple Inc." });
  
  // Click on the "Create this computer" button
  await page.getByText("Create this computer").click();
  
  // Assert that the success message is visible
  await expect(
    page.getByText("Done ! Computer Feldco has been created")
  ).toBeVisible();
});

// Test to add a new computer using Page Object Model (POM)
test("basic test with POM", async ({ page }) => {
  // Initialize the page objects
  const computersPage = new ComputersPage(page);
  const addComputerPage = new AddComputerPage(page);
  
  // Navigate to the computers page
  await computersPage.goto();
  
  // Click on the "Add a new computer" button on the computers page
  await computersPage.clickAddNewComputer();
  
  // Fill in the form fields with computer information on the add computer page
  await addComputerPage.addNewComputer();
  
  // Assert that the new computer is added successfully
  await computersPage.assertNewComputerAdded();
});
