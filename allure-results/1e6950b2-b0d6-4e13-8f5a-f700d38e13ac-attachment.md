# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test
- Location: tests/Login.spec.ts:43:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login-button')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   private readonly page: Page;
  5  |   private readonly txtEmailAddress: Locator;
  6  |   private readonly txtPassword: Locator;
  7  |   private readonly btnLogin: Locator;
  8  |   private readonly txtErrorMessage: Locator;
  9  | 
  10 |     constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.txtEmailAddress = page.locator('#input-email');
  13 |     this.txtPassword = page.locator('#input-password');
  14 |     this.btnLogin = page.locator('#login-button');
  15 |     this.txtErrorMessage = page.locator('#error-message');
  16 |   }
  17 | 
  18 |   /**
  19 |    * set the email address in the login field
  20 |    * @param email - email address to enter
  21 |    */
  22 |   async setEmailAddress(email: string): Promise<void> {
  23 |     await this.txtEmailAddress.fill(email);
  24 |   }
  25 |     
  26 |   /**
  27 |    * set the password in the login field
  28 |    * @param password - password to enter
  29 |    */
  30 |   async setPassword(password: string): Promise<void> {
  31 |     await this.txtPassword.fill(password);
  32 |   } 
  33 | 
  34 |   /**
  35 |    * click the login button
  36 |    */
  37 |   async clickLogin(): Promise<void> {
> 38 |     await this.btnLogin.click();
     |                         ^ Error: locator.click: Target page, context or browser has been closed
  39 |   }
  40 | 
  41 |   /**
  42 |    * Perform complete login action
  43 |    * @param email - email address to enter
  44 |    * @param password - password to enter
  45 |    */
  46 |   async login(email: string, password: string): Promise<void> {
  47 |     await this.setEmailAddress(email);
  48 |     await this.setPassword(password);
  49 |     await this.clickLogin();
  50 |   }
  51 | 
  52 |   async getErrorMessage(): Promise<null | string> {
  53 |     return(this.txtErrorMessage.textContent());
  54 | 
  55 |   }
  56 | }
  57 | 
```