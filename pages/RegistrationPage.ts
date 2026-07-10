import {Page, expect, Locator} from "@playwright/test";
export class RegistrationPage{
    private readonly page: Page;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    constructor(page: Page){
        this.page = page;
        this.txtFirstName = page.locator("#input-firstname");
        this.txtLastName = page.locator("#input-lastname");
        this.txtEmail = page.locator("#input-email");
        this.txtTelephone = page.locator("#input-telephone");
        this.txtPassword = page.locator("#input-password");
        this.txtConfirmPassword = page.locator("#input-confirm");
        this.chkPrivacyPolicy = page.locator("input[name='agree']");
        this.btnContinue = page.locator('input[type="submit"][value="Continue"]');
        this.msgConfirmation = page.locator("h1:has-text(\'Your Account Has Been Created!\')");
    }
/**
 * set the first name in the registration form
 * @param fname - first name to enter in the registration form
 */
    async setFirstName(fname: string): Promise<void> {
        await this.txtFirstName.fill(fname);
    }

    //set the last name in the registration form
    /**
     * set the last name in the registration form
     * @param lName - the last name to be set in the registration form
     */
    async setLastName(lName: string): Promise<void> {
        await this.txtLastName.fill(lName);
    }
    /**
     * set the email in the registration form
     * @param email - email to enter
     */
    async setEmail(txtEmail: string){
        await this.txtEmail.fill(txtEmail);
    }

    /**
     * set the telephone number in the registration form
     * @param telephone - telephone number to enter
     */
    async setTelephone(txtTelephone: string){
        await this.txtTelephone.fill(txtTelephone);
    }

    /**
     * set the password in the registration form
     * @param password - password to enter
     */
    async setPassword(txtPassword: string){
        await this.txtPassword.fill(txtPassword);
    }

    /**
     * set the confirm password in the registration form
     * @param confirmPassword - confirm password to enter
     */
    async setConfirmPassword(txtConfirmPassword: string){
        await this.txtConfirmPassword.fill(txtConfirmPassword);
    }

    /**
     * accept the privacy policy by clicking on the checkbox
     */
    async acceptPrivacyPolicy(){
        await this.chkPrivacyPolicy.check();
    }

    /**
     * click on the continue button to submit the registration form
     */
    async clickContinue(){
        await this.btnContinue.click();
    }

    /**
     * get the registration success message after successful registration
     * @returns Promise<string> - Confirmation message text 
     */

    async getConfirmationMessage(): Promise<string> {
        // Wait for the confirmation message to appear before getting its text
        await this.msgConfirmation.waitFor({ state: 'visible', timeout: 15000 });
        return await this.msgConfirmation.textContent() ?? "";
    }

    /**
     * Compltete registrationn workflow
     * @param userData - Object containing user data for registration
     */
    async completeRegistration(userData: {
        firstName: string; 
        lastName: string; 
        email: string;
        telephone: string; 
        password: string;}): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.acceptPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgConfirmation).toBeVisible();
    }
}


