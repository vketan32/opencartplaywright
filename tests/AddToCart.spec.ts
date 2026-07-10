/**
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click on the search button
 * 4. Verify that the product is displayed in the search results
 * 5. Select the product from the search results
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message is displayed
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import {SearchResultsPage} from '../pages/SearchResultsPage';
import { TestConfig } from '../test.config';

// Shared instances
let homePage: HomePage;
let productPage: ProductPage;
let searchResultsPage: SearchResultsPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig(); // Load test configuration
    await page.goto(testConfig.appUrl); // Navigate to the application URL

    // Initialize page objects
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    searchResultsPage = new SearchResultsPage(page);
});

test.afterEach(async ({ page }) => {
    await page.close(); // Optional cleanup after each test
});

test('Add product to cart test @master @regression', async ({ page }) => {
    // Step 2: Enter an existing product name in the search box
    await homePage.searchBox.fill(testConfig.productName); // Use the product name from the configuration

    // Step 3: Click on the search button
    await homePage.searchButton.click();
    
    // Step 4: Verify that the product is displayed in the search results
    const productName = testConfig.productName; // Use the product name from the configuration
    expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

    // Step 5: Select the product from the search results
    const productname = testConfig.productName; // Use the product name from the configuration
    expect(await searchResultsPage.isProductExist(productname)).toBeTruthy();

    // Step 6-7-8: Select product, set quantity, add to cart, and verify confirmation message
    if (await searchResultsPage.isProductExist(productname)) {
        // productPage = await searchResultsPage.selectProduct(productname);
        await searchResultsPage.selectProduct(productname);
        await productPage.setQuantity(testConfig.productQuantity);
        await productPage.addToCart();

        // Step 8: Verify the success message is displayed
        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
    }
});