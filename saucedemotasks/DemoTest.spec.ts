

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

    // SORT AND VERIFY A-Z SORTING
    await sortingPage.selectOption('az');
    const sortingA_Z = await sortingPage.getSelectedOptionValue();
    await expect(sortingA_Z).toEqual('az');

    //SORT AND VERIFY Z-A SORTING
    await sortingPage.selectOption('za');
    const sortingZ_A = await sortingPage.getSelectedOptionValue();
    await expect(sortingZ_A).toEqual('za');
});


  

  

