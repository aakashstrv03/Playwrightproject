import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
  await page.goto('https://letcode.in/dropdowns/');
  const drp = await page.locator('//select[@id="fruits"]')
  await drp.selectOption({index:1})
 const dwm = await drp.locator('option:checked').textContent()
console.log(dwm)
//   // Expect a title "to contain" a substring.
const md = await page.locator('//select[@id="superheros"]')
await md.selectOption([{label:"Aquaman"},{value:"ta"},{index:0}])
await page.waitForTimeout(3000);
const w = await md.locator('option:checked').allTextContents()
console.log(w)
});