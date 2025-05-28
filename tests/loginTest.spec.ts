import { test } from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';
import { decrypt, encrypt } from '../src/utils/CryptojsUtil';
import {encryptEnvFile} from '../src/utils/EncryptEnvFile';

test("test", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})

test.skip("Sample env test", async ({ page }) => {
    // const plainText = 'Hello Saajidh!';
    // const encryptedText = encrypt(plainText);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted: ', encryptedText);
    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted: ', decryptedText);
    encryptEnvFile();
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.userid);
    // console.log(process.env.password);
})