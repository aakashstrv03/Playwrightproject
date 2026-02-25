import { test, expect } from '@playwright/test';
test('table', async ({page}) => {
 await page.goto('https://qavbox.github.io/demo/webtable/')
 const row = await page.locator('//table[@id="table02"]//tbody//tr[2]//td').allTextContents()
 console.log(row)
const column =  await page.locator('//table[@id="table02"]//tbody//tr//td[2]').allTextContents()
console.log(column)
const spc =  await page.locator('//table[@id="table02"]//tbody//tr[3]//td[2]').textContent()
console.log(spc)
})