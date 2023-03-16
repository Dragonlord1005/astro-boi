import { test, expect } from '@playwright/test';

test('Test entire site', async ({ page }) => {
    await page.goto('localhost:3000');

    await page.getByRole('heading', { name: 'Astro Boi' }).getByText('Astro Boi').click();
    await page.getByRole('link', { name: 'About' }).click();
    await page.getByRole('heading', { name: 'About', exact: true }).click();
    await page.getByRole('link', { name: 'Projects' }).click();
    await page.getByRole('heading', { name: 'My Projects' }).click();
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    await page.getByRole('heading', { name: 'Blog Posts' }).click();
});