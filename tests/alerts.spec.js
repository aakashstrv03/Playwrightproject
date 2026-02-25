import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  await page.once('dialog',async(dialog)=>{
const vd = await dialog.message()
console.log(vd)
await dialog.accept()
  })
  await page.locator('//button[@onclick="alertbox()"]').click() 
  await page.locator('(//a[@class="analystic"])[2]').click()
// await page.waitForTimeout(3000) 
await page.once('dialog',async(dialog)=>{
   console.log("Confirmation alert:",dialog.message())
   await dialog.dismiss()
})
  await page.waitForTimeout(3000)
await page.locator('//button[@onclick="confirmbox()"]').click()
  // Expect a title "to contain" a substring.
});