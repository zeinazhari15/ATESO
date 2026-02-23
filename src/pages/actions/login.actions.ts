import { Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { LoginLocators } from '../locators/login.locators';

export class LoginActions extends BasePage {
    readonly locators: LoginLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new LoginLocators(page);
    }

    async login(username: string, password: string) {
        await this.fillText(this.locators.usernameInput, username);
        await this.fillText(this.locators.passwordInput, password);
        await this.clickElement(this.locators.loginButton);
    }

    async getWelcomeMessage() {
        return await this.getElementText(this.locators.welcomeMessage);
    }
}
