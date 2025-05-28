import { test } from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';

test("test", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("saajidhasc456@agentforce.com");
    await loginPage.fillPassword("Saaj@123");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})