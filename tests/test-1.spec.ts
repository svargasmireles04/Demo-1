import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');
  await page.getByRole('link', { name: 'Add a new computer' }).click();
  await page.getByLabel('Computer name').click();
  await page.getByLabel('Computer name').fill('erert');
  await page.getByText('Create this computer or Cancel').click();
});