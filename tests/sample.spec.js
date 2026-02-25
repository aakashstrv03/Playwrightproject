import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/'); 

});
test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.com/'); 

});
test('has title', async ({ page }) => {
  await page.goto('https://www.myntra.com/'); 

});