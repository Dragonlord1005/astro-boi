import { test } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4321");
});

test.describe("Test each page individually", () => {
  test("Test home page", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Astro Boi" })
      .getByText("Astro Boi")
      .click();
  });

  test("Test about page", async ({ page }) => {
    await page.getByRole("link", { name: "About" }).click();
    await page.getByAltText("Derpy").click();
    await page.getByRole("heading", { name: "About", exact: true }).click();
  });

  test("Test projects page", async ({ page }) => {
    // await page.goto('http://localhost:3000/');
    await page.getByRole("link", { name: "Projects", exact: true }).click();
    // await page.getByRole('link', { name: 'Projects' }).click();
    await page.getByRole("heading", { name: "My Projects" }).click();
  });

  test("Test Blog Posts page", async ({ page }) => {
    await page.getByRole("link", { name: "Blog", exact: true }).click();
    await page.getByRole("heading", { name: "Blog Posts" }).click();
  });
});
