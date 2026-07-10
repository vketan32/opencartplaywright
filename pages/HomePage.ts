import { Page, expect, Locator } from "@playwright/test";

export class HomePage{
    private page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    constructor(page: Page){
        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.linkLogin = page.locator('a:has-text("Login")');
        this.txtSearchbox = page.locator("input[name='search']");
        this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
    }

    // check if the home page is loaded by verifying the title
    async isHomePageLoaded(){
        let title:string = await this.page.title();
        if(title === "Your Store"){
            return true;
        }
        return false;
    }

    get myAccount(){
        return this.lnkMyAccount;
    }

    get registerOption(){
        return this.lnkRegister;
    }

    get loginOption(){
        return this.linkLogin;
    }

    get searchBox(){
        return this.txtSearchbox;
    }

    get searchButton(){
        return this.btnSearch;
    }           

    async navigateToLoginPage(){
        await this.myAccount.click();
        await this.loginOption.click();
    }

    async searchProduct(productName: string){
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }
}