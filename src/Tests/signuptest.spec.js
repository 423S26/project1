import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://csci423project1.netlify.app/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('John test');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('johnteste@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test1234');
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();
});