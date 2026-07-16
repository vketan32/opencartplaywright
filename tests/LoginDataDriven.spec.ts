import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {DataProvider} from '../utils/dataProvider';
import {MyAccountPage} from '../pages/MyAccountPage';
import {TestConfig} from '../test.config';

//Load json test data logindata.json
const jsonpath = "testData/logindata.json";
const jsonTestData = DataProvider.getTestDataFromJson(jsonpath);

for (const data of jsonTestData) {
  test(`Login Test with username: ${data.testName} @data-driven`, async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);

    const homePage = new HomePage(page);
    await homePage.myAccount.click();
    await homePage.loginOption.click();

    const loginPage = new LoginPage(page);
    await loginPage.login(data.email, data.password);
    await page.waitForLoadState('networkidle');

    if (data.expected.toLowerCase() === 'success') {
      const MyaccountPage = new MyAccountPage(page);
      const isLoggedIn = await MyaccountPage.isMyAccountPageExists();
      expect(isLoggedIn).toBeTruthy();
    } else {
      const errorMessage = await loginPage.getErrorMessage();
      expect([  
        `Warning: No match for E-Mail Address and/or Pour account has exceedeassword.`,
        `Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.`
      ]).toContain(errorMessage);
    }
  });
}