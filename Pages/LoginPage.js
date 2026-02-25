export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('//input[@id="username"]')
        this.password=page.locator('//input[@id="password"]')
        this.button=page.locator('//button[@id="submit-login"]')

    }
    async launchUrl(){
        await this.page.goto('https://practice.expandtesting.com/login')
    }
    async enterUsername(){
        await this.username.fill('practice')
    }
    async enterPassword(){
        await this.password.fill('SuperSecretPassword!')
    }
    async submitButton(){
        await this.button.click()
    }
}