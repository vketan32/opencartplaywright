import { test, expect } from '@playwright/test';
import { LogoutPage } from '../pages/LogoutPage';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LoginPage } from '../pages/LoginPage';

// Declare shared variables
let logoutPage: LogoutPage;
let homePage: HomePage;
let myAccountPage: MyAccountPage;
let loginPage: LoginPage;
let config: TestConfig;

// Setup before each test
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

// Initialize page objects
    homePage = new HomePage(page);
    myAccountPage = new MyAccountPage(page);
    loginPage = new LoginPage(page);
    //logoutPage = new LogoutPage(page);
});

// Optional: Cleanup after each test
test.afterEach(async ({ page }) => {
    await page.close(); // Close the browser tab (helps keep tests clean)
});

test('User logout test @master @regression', async () => {
    // step 2: Navigate to login page
    await homePage.myAccount.click();
    await homePage.loginOption.click();

    // step 3: Perform login using valid credentials from TestConfig
    await loginPage.login(config.email, config.password);

    // step 4: Verify successful login
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

    // step 5: Perform logout, with returning the LogoutPage instance
    logoutPage = await myAccountPage.clickLogout();

    // step 6: Verify successful logout
    expect(await logoutPage.isContinueButtonVisible()).toBe(true);

    // step 7: Click the continue and verify that the user is redirected to the home page
    homePage = await logoutPage.clickContinue();
    expect(await homePage.isHomePageLoaded()).toBe(true);
});
