import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('contentinfo').getByRole('link', { name: 'Shop' }).click();
    await page.getByRole('contentinfo').getByRole('link', { name: 'Community' }).click();
    await page.getByRole('contentinfo').getByRole('link', { name: 'Documentation' }).click();
});