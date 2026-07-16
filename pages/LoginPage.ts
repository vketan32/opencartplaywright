import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly txtEmailAddress: Locator;
  private readonly txtPassword: Locator;
  private readonly btnLogin: Locator;
  private readonly txtErrorMessage: Locator;

    constructor(page: Page) {
    this.page = page;
    this.txtEmailAddress = page.locator('#input-email');
    this.txtPassword = page.locator('#input-password');
    this.btnLogin = page.locator('input[type="submit"]');
    this.txtErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
  }

  /**
   * set the email address in the login field
   * @param email - email address to enter
   */
  async setEmailAddress(email: string): Promise<void> {
    await this.txtEmailAddress.fill(email);
  }
    
  /**
   * set the password in the login field
   * @param password - password to enter
   */
  async setPassword(password: string): Promise<void> {
    await this.txtPassword.fill(password);
  } 

  /**
   * click the login button
   */
  async clickLogin(): Promise<void> {
    await this.btnLogin.waitFor({ state: 'visible', timeout: 10000 });
    await this.btnLogin.click();
  }

  /**
   * Perform complete login action
   * @param email - email address to enter
   * @param password - password to enter
   */
  async login(email: string, password: string): Promise<void> {
    await this.setEmailAddress(email);
    await this.setPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.txtErrorMessage.textContent();
  }
}
