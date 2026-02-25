// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(3000)
  await page.locator('//input[@id="email"]').fill("Akashkumar")
  await page.locator('//input[@name="pass"]').fill("Vakk12334@")
  await page.locator('//button[text()="Log in"]').click()
  await page.waitForTimeout(3000)  

  // Expect a title "to contain" a substring.
});