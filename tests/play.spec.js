// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://letcode.in/dropdowns/');
  
  // Expect a title "to contain" a substring.
});