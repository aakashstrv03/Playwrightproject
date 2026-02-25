import{test , expect} from '@playwright/test'
test('frame' , async ({page})=> {
await page.goto('https://demo.automationtesting.in/Frames.html')
const single = await page.frameLocator('//iframe[@id="singleframe"]')
await single.locator('//input[@type="text"]').fill('ssasas')
// await page.waitForTimeout(3000)
await page.locator('(//a[@class="analystic"])[2]').click()
const multiple = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const multipleframe = await multiple.frameLocator('//iframe[@src="SingleFrame.html"]')
await multipleframe.locator('//input[@type="text"]').fill('abcde')
})