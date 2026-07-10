/**
 * Test Case: Search Products
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to the application's URL
 * 2. Enter the product name in the search field
 * 3. Click the serach button
 * 4. Verify if the product is displayed in the search results
 */
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { TestConfig } from '../test.config';

// Declare shared variables
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;
let config: TestConfig;

//  Playwrite Hook - runs before each test
test.beforeEach(async ({ page }) => {
    config = new TestConfig(); // Load configuration values like appUrl, email, password, productName, etc.
    await page.goto(config.appUrl);

    // Initialize page objects
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
});

// Playwrite Hook - runs after each test
test.afterEach(async ({ page }) => {
    await page.close(); // Close the browser tab (helps keep tests clean)
});

// Test case for searching products
test('Search Products test @master @regression', async () => {
    // Step 2: Enter the product name in the search field
    await homePage.searchProduct(config.productName);

    // Step 3: Click the search button
    await homePage.searchButton.click();

    // Step 4: Verify if the product is displayed in the search results
    const isProductFound = await searchResultsPage.isProductExist(config.productName);
    expect(isProductFound).toBe(true);
});