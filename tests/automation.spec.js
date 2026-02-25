import{test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
test('Page Object Model',async({ page })=>{
    const login = new LoginPage(page)
    await login.launchUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.submitButton()

})