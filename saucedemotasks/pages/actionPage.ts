import { Page, Locator } from '@playwright/test';

export class ActivityPage {
    private readonly page: Page;
    private readonly productSortContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productSortContainer = page.locator('.product_sort_container');
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
}
