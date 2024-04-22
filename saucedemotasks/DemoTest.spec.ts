
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ActivityPage } from './pages/actionPage';

test('test to login and sorting of names', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // SORTING STAGE
    const sortingPage = new ActivityPage(page);

    // Assert that the URL is correct after login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Extract product names before sorting
    await sortingPage.getProductNames();
   
    // SORT AND VERIFY A-Z SORTING
    await sortingPage.selectOption('az');
    const sortingA_Z = await sortingPage.getSelectedOptionValue();
    
    await expect(sortingA_Z).toEqual('az');

    // Extract product names after A-Z sorting
    const productNamesA_Z = await sortingPage.getProductNames();
    console.log(productNamesA_Z)
  
    // Verify A-Z is sorted using javascript method 
    const sortedA_Z = productNamesA_Z.slice().sort();
    console.log(sortedA_Z)
    await expect(productNamesA_Z).toEqual(sortedA_Z);

    //SORT AND VERIFY Z-A SORTING
    await sortingPage.selectOption('za');
    const sortingZ_A = await sortingPage.getSelectedOptionValue();
    await expect(sortingZ_A).toEqual('za');

    // Extract product names after Z-A sorting
    const productNamesZ_A = await sortingPage.getProductNames();

    // Verify Z-A sorting by just reversing the product.
    const sortedZ_A = productNamesZ_A.slice().sort().reverse();
    console.log(sortedZ_A)
    await expect(productNamesZ_A).toEqual(sortedZ_A);
});

  

  

