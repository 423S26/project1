import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://csci423project1.netlify.app/');
    await page.getByRole('navigation').getByRole('link', { name: 'Shop' }).click();
    await page.getByRole('button', { name: 'Create Listing' }).click();
    await page.getByRole('textbox', { name: 'Title' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill('testing title');
    await page.getByRole('textbox', { name: 'Title' }).press('Tab');
    await page.getByRole('textbox', { name: 'Description' }).fill('testing desc');
    await page.getByRole('textbox', { name: 'Description' }).press('Tab');
    await page.getByRole('spinbutton', { name: 'Price $' }).fill('20');
    await page.getByRole('button', { name: 'Upload Image' }).click();
    await page.getByRole('button', { name: 'Post Listing' }).click();
    await page.getByRole('img', { name: 'testing', exact: true }).click();
    await page.getByRole('link', { name: 'Contact Seller' }).click();
    await page.locator('div').filter({ hasText: 'testingDescription:123Price:$' }).nth(1).click();
    await page.locator('div').filter({ hasText: 'testingDescription:123Price:$' }).nth(1).click();
    await page.locator('div').filter({ hasText: 'testingDescription:123Price:$' }).nth(1).click();
});