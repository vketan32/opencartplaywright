# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests/EndToEndTest.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h1:has-text(\'Your Account Has Been Created!\')')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]: 
      - text: "Warning: You must agree to the Privacy Policy!"
    - generic [ref=e76]:
      - generic [ref=e77]:
        - heading "Register Account" [level=1] [ref=e78]
        - paragraph [ref=e79]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e80] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - text: .
        - generic [ref=e81]:
          - group "Your Personal Details" [ref=e82]:
            - generic [ref=e83]: Your Personal Details
            - text: "*"
            - generic [ref=e84]:
              - generic [ref=e85]: "* First Name"
              - textbox "* First Name" [ref=e87]:
                - /placeholder: First Name
                - text: Austin
            - generic [ref=e88]:
              - generic [ref=e89]: "* Last Name"
              - textbox "* Last Name" [ref=e91]:
                - /placeholder: Last Name
                - text: Gorczany
            - generic [ref=e92]:
              - generic [ref=e93]: "* E-Mail"
              - textbox "* E-Mail" [ref=e95]:
                - /placeholder: E-Mail
                - text: Reuben_Pfeffer26@gmail.com
            - generic [ref=e96]:
              - generic [ref=e97]: "* Telephone"
              - textbox "* Telephone" [ref=e99]:
                - /placeholder: Telephone
                - text: 1-274-748-5049 x66452
          - group "Your Password" [ref=e100]:
            - generic [ref=e101]: Your Password
            - generic [ref=e102]:
              - generic [ref=e103]: "* Password"
              - textbox "* Password" [ref=e105]:
                - /placeholder: Password
                - text: test123
            - generic [ref=e106]:
              - generic [ref=e107]: "* Password Confirm"
              - textbox "* Password Confirm" [ref=e109]:
                - /placeholder: Password Confirm
                - text: test123
          - group "Newsletter" [ref=e110]:
            - generic [ref=e111]: Newsletter
            - generic [ref=e112]:
              - generic [ref=e113]: Subscribe
              - generic [ref=e114]:
                - generic [ref=e115] [cursor=pointer]:
                  - radio "Yes" [ref=e116]
                  - text: "Yes"
                - generic [ref=e117] [cursor=pointer]:
                  - radio "No" [checked] [ref=e118]
                  - text: "No"
          - generic [ref=e119]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e120] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information/agree&information_id=3
            - checkbox [ref=e121]
            - button "Continue" [ref=e122] [cursor=pointer]
      - complementary [ref=e123]:
        - generic [ref=e124]:
          - link "Login" [ref=e125] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e126] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e127] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e128] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e129] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e130] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e131] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e132] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e133] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e134] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e135] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e136] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e137] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Information" [level=5] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "About Us" [ref=e145] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e146]:
              - link "Delivery Information" [ref=e147] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e148]:
              - link "Privacy Policy" [ref=e149] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e150]:
              - link "Terms & Conditions" [ref=e151] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e152]:
          - heading "Customer Service" [level=5] [ref=e153]
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Contact Us" [ref=e156] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e157]:
              - link "Returns" [ref=e158] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e159]:
              - link "Site Map" [ref=e160] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e161]:
          - heading "Extras" [level=5] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Brands" [ref=e165] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e166]:
              - link "Gift Certificates" [ref=e167] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e168]:
              - link "Affiliate" [ref=e169] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e170]:
              - link "Specials" [ref=e171] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e172]:
          - heading "My Account" [level=5] [ref=e173]
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "My Account" [ref=e176] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e177]:
              - link "Order History" [ref=e178] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e179]:
              - link "Wish List" [ref=e180] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e181]:
              - link "Newsletter" [ref=e182] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e183]
      - paragraph [ref=e184]:
        - text: Powered By
        - link "OpenCart" [ref=e185] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1   | import {Page, expect, Locator} from "@playwright/test";
  2   | export class RegistrationPage{
  3   |     private readonly page: Page;
  4   |     private readonly txtFirstName: Locator;
  5   |     private readonly txtLastName: Locator;
  6   |     private readonly txtEmail: Locator;
  7   |     private readonly txtTelephone: Locator;
  8   |     private readonly txtPassword: Locator;
  9   |     private readonly txtConfirmPassword: Locator;
  10  |     private readonly chkPrivacyPolicy: Locator;
  11  |     private readonly btnContinue: Locator;
  12  |     private readonly msgConfirmation: Locator;
  13  | 
  14  |     constructor(page: Page){
  15  |         this.page = page;
  16  |         this.txtFirstName = page.locator("#input-firstname");
  17  |         this.txtLastName = page.locator("#input-lastname");
  18  |         this.txtEmail = page.locator("#input-email");
  19  |         this.txtTelephone = page.locator("#input-telephone");
  20  |         this.txtPassword = page.locator("#input-password");
  21  |         this.txtConfirmPassword = page.locator("#input-confirm");
  22  |         this.chkPrivacyPolicy = page.locator("input[name='agree']");
  23  |         this.btnContinue = page.locator('input[type="submit"][value="Continue"]');
  24  |         this.msgConfirmation = page.locator("h1:has-text('Your Account Has Been Created!')");
  25  |     }
  26  | /**
  27  |  * set the first name in the registration form
  28  |  * @param fname - first name to enter in the registration form
  29  |  */
  30  |     async setFirstName(fname: string): Promise<void> {
  31  |         await this.txtFirstName.fill(fname);
  32  |     }
  33  | 
  34  |     //set the last name in the registration form
  35  |     /**
  36  |      * set the last name in the registration form
  37  |      * @param lName - the last name to be set in the registration form
  38  |      */
  39  |     async setLastName(lName: string): Promise<void> {
  40  |         await this.txtLastName.fill(lName);
  41  |     }
  42  |     /**
  43  |      * set the email in the registration form
  44  |      * @param email - email to enter
  45  |      */
  46  |     async setEmail(txtEmail: string){
  47  |         await this.txtEmail.fill(txtEmail);
  48  |     }
  49  | 
  50  |     /**
  51  |      * set the telephone number in the registration form
  52  |      * @param telephone - telephone number to enter
  53  |      */
  54  |     async setTelephone(txtTelephone: string){
  55  |         await this.txtTelephone.fill(txtTelephone);
  56  |     }
  57  | 
  58  |     /**
  59  |      * set the password in the registration form
  60  |      * @param password - password to enter
  61  |      */
  62  |     async setPassword(txtPassword: string){
  63  |         await this.txtPassword.fill(txtPassword);
  64  |     }
  65  | 
  66  |     /**
  67  |      * set the confirm password in the registration form
  68  |      * @param confirmPassword - confirm password to enter
  69  |      */
  70  |     async setConfirmPassword(txtConfirmPassword: string){
  71  |         await this.txtConfirmPassword.fill(txtConfirmPassword);
  72  |     }
  73  | 
  74  |     /**
  75  |      * accept the privacy policy by clicking on the checkbox
  76  |      */
  77  |     async acceptPrivacyPolicy(){
  78  |         await this.chkPrivacyPolicy.check();
  79  |     }
  80  | 
  81  |     /**
  82  |      * click on the continue button to submit the registration form
  83  |      */
  84  |     async clickContinue(){
  85  |         await this.btnContinue.click();
  86  |     }
  87  | 
  88  |     /**
  89  |      * get the registration success message after successful registration
  90  |      * @returns Promise<string> - Confirmation message text 
  91  |      */
  92  | 
  93  |     async getConfirmationMessage(): Promise<string> {
> 94  |         return await this.msgConfirmation.textContent() ?? "";
      |                                           ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  95  |     }
  96  | 
  97  |     /**
  98  |      * Compltete registrationn workflow
  99  |      * @param userData - Object containing user data for registration
  100 |      */
  101 |     async completeRegistration(userData: {
  102 |         firstName: string; 
  103 |         lastName: string; 
  104 |         email: string;
  105 |         telephone: string; 
  106 |         password: string;}): Promise<void> {
  107 |         await this.setFirstName(userData.firstName);
  108 |         await this.setLastName(userData.lastName);
  109 |         await this.setEmail(userData.email);
  110 |         await this.setTelephone(userData.telephone);
  111 |         await this.setPassword(userData.password);
  112 |         await this.setConfirmPassword(userData.password);
  113 |         await this.acceptPrivacyPolicy();
  114 |         await this.clickContinue();
  115 |         await expect(this.msgConfirmation).toBeVisible();
  116 |     }
  117 | }
  118 | 
  119 | 
  120 | 
```