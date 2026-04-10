import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('navigation').getByRole('link', { name: 'Documentation' }).click();
    await page.getByRole('link', { name: 'Overview' }).click();
    await page.getByRole('link', { name: 'Features' }).click();
    await page.getByRole('link', { name: 'Why It\'s Unique' }).click();
});