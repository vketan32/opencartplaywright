/**
 * Test Case: Login with valid credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1. Navigate to the application URL
 * 2. Navigate to login page via HomePage
 * 3. Enter valid credentials (email and password) and login
 * 4. Verify successful login by checking if the My Account page is displayed
 * 
 * Expected Result: The user should be successfully logged in and redirected to the My Account page.
 */

import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import {TestConfig} from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let config: TestConfig; 

// this hook will run before each test in this file

test.beforeEach(async ({page}) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    // Initialize the page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
})

// Optional cleanup after each test, if needed
test.afterEach(async ({page}) => {
    await page.waitForTimeout(3000); // Wait for 3 seconds before closing the page
    await page.close();
})

test('User login test @master @sanity @regression', async () => {

    // Step 2: Navigate to login page via HomePage
    await homePage.myAccount.click();
    await homePage.loginOption.click();
    
    // Step 3: Enter valid credentials (email and password) and login
   await loginPage.login(config.email, config.password);

    // Step 4: Verify successful login by checking if the My Account page is displayed
    const isMyAccountPageDisplayed = await myAccountPage.isMyAccountPageExists();
    expect(isMyAccountPageDisplayed).toBe(true);
}   
)