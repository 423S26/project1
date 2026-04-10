import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('button', { name: 'Logout' }).click();
});