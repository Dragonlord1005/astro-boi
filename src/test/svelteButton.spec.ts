import { test } from "@playwright/test";
import { expect } from "@playwright/test";

test.describe("Svelte Counter", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the counter is located
    await page.goto("localhost:4321/projects/svelte-counter");
  });

  test("should increase and decrease the counter", async ({ page }) => {
    // Get the counter value
    let counterValue = await page.textContent(".counter span");

    // Check initial counter value
    expect(counterValue).toBe("0");

    // Click the increase button
    await page.getByRole("button", { name: "+" }).click();

    // Wait for the counter value to be updated
    // await page.waitForSelector(".counter span:has-text('1')");

    // Get the new counter value
    counterValue = await page.textContent(".counter span");

    // Check if counter value has increased
    expect(counterValue).toBe("1");

    // Click the decrease button
    await page.getByRole("button", { name: "-" }).click();

    // Get the new counter value
    counterValue = await page.textContent(".counter span");

    // Check if counter value has decreased
    expect(counterValue).toBe("0");
  });

  test("should enter negative numbers", async ({ page }) => {
    // Get the counter value
    let counterValue = await page.textContent(".counter span");
    expect(counterValue).toBe("0");

    // Check initial counter value
    expect(counterValue).toBe("0");

    // Click the decrease button 5 times
    for (let i = 0; i < 5; i++) {
      await page.getByRole("button", { name: "-" }).click();
    }

    // Get the new counter value
    counterValue = await page.textContent(".counter span");

    // Check if counter value has decreased
    expect(counterValue).toBe("-5");
  });

  test("stress test", async ({ page }) => {
    // Lets playwright know that the test will take a long time
    test.setTimeout(180000);

    // Get the counter value
    let counterValue = await page.textContent(".counter span");

    // Check initial counter value
    expect(counterValue).toBe("0");

    // Click the increase button 100 times
    for (let i = 0; i < 100; i++) {
      await page.getByRole("button", { name: "+" }).click();
    }

    // Get the new counter value
    counterValue = await page.textContent(".counter span");

    // Check if counter value has increased
    expect(counterValue).toBe("100");

    // Click the decrease button 200 times
    for (let i = 0; i < 200; i++) {
      await page.getByRole("button", { name: "-" }).click();
    }

    // Get the new counter value
    counterValue = await page.textContent(".counter span");

    // Check if counter value has decreased
    expect(counterValue).toBe("-100");
  });
});
