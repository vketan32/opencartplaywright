/**
 * Test case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * steps:
 * 1. Navigate to the home page
 * 2. Click on the "Register" button
 * 3. Fill in the registration form with random data
 * 4. agree to the terms and conditions
 * 5. Click on the "Register" button
 * 6. Verify that the registration was successful
 * 
 * Expected Result: The user should be successfully registered and redirected to the home page.
 */
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  await page.goto(config.appUrl);
  homePage = new HomePage(page);
  registrationPage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000); // Wait for 2 seconds before closing the page
  await page.close();
})

// Step 2: Click on the "Register" button
test('User registration test @master @sanity @regression', async () => {
  await homePage.myAccount.click();
  await homePage.registerOption.click();

  // Step 3: Fill in the registration form with random data (direct selectors to avoid importing RegistrationPage)

  await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  await registrationPage.setLastName(RandomDataUtil.getLastName());
  await registrationPage.setEmail(RandomDataUtil.getEmail());
  await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

  const password = RandomDataUtil.getPassword();
  await registrationPage.setPassword(password);
  await registrationPage.setConfirmPassword(password);
  // Step 4: Agree to the terms and conditions
  await registrationPage.acceptPrivacyPolicy();
  // Step 5: Click on the "Register" button
  await registrationPage.clickContinue();

  // Step 6: Verify that the registration was successful
  const confirmationMsg = await registrationPage.getConfirmationMessage();
  expect(confirmationMsg).toContain("Your Account Has Been Created!");
});
