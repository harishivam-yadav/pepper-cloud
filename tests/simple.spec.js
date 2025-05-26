import { test, expect } from '@playwright/test';
import {generateAllRandomData} from '../utils/data_gen.js';
import { config } from 'dotenv';
config();

test('test', async ({ page }) => {
  test.setTimeout(60000);
  const testData = generateAllRandomData();
  console.log('Generated Data:', testData);
  await page.goto('https://demo.peppercloud.com/login');
  await page.getByRole('textbox', { name: 'Email ID' }).fill(process.env.pepper_email);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.pepper_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Create new' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Create new' }).click();
  await page.locator('input[name="lastName"]').fill(testData.lastName);
  await page.locator('input[name="company"]').fill(testData.companyName);
  await page.locator('input[name="email"]').fill(testData.email);
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('heading', { name: 'Record was saved successfully' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill(testData.email);
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot/1.png' });
});