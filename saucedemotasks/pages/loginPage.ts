import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    
    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
