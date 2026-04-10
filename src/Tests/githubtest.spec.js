import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'this link' }).click();
    const page3 = await page3Promise;
});