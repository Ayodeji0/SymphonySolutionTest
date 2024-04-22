

import { Page, Locator } from '@playwright/test';

export class ActivityPage {
    private readonly page: Page;
    private readonly productSortContainer: Locator;
    private readonly productNamesLocator: string; 

    constructor(page: Page) {
        this.page = page;
        this.productSortContainer = page.locator('.product_sort_container');
        this.productNamesLocator = '.inventory_item_name'; 
    }

    async selectOption(value: string): Promise<void> {
        await this.productSortContainer.selectOption({ value });
    }

    async getSelectedOptionValue(): Promise<string> {
        const selectedOption = await this.productSortContainer.evaluate((option: HTMLOptionElement | SVGElement) => {
            if ('value' in option) {
                return option.value;
            } else {
                return '';
            }
        });
        return selectedOption as string;
    }

    async getProductNames(): Promise<string[]> {
        const productElements = await this.page.$$(this.productNamesLocator);
        const productNames: string[] = [];

        for (const element of productElements) {
            const textContent = await element.textContent();
            if (textContent !== null) {
                productNames.push(textContent.trim());
            }
        }

        return productNames;
    }
}
