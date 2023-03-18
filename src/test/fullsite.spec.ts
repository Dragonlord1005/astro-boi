import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000');
});

test.describe('Test each page individually', () => {
    test('Test home page', async ({ page }) => {
        await page.getByRole('heading', { name: 'Astro Boi' }).getByText('Astro Boi').click();
    })

    test('Test about page', async ({ page }) => {
        await page.getByRole('link', { name: 'About' }).click();
        await page.getByRole('heading', { name: 'About', exact: true }).click();
    })
});