import { Page } from '@playwright/test';
import HomePage from './HomePage';
import logger from '../utils/LoggerUtil';

export default class LoginPage {
    readonly textUsername = "#username";
    readonly textPassword = "#password";
    readonly btnLogin = "#Login";

    constructor(private page: Page) {

    }

    async navigateToLoginPage() {
        await this.page.goto("/");
        logger.info('Navigated to login.salesforce.com')
    }

    async fillUsername(username: string) {
        await this.page.locator(this.textUsername).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.textPassword).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.btnLogin).click().catch((error) => {
            logger.error(`Error clicking login button: ${error}`);
            throw error;
        })

        const homePage = new HomePage(this.page);   //Creating an object class at the end is called Page Object Chaining
        return homePage;
    }
}