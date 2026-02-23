import { test, expect } from '@playwright/test';
import { LoginActions } from '../pages/actions/login.actions';

test.describe('Login Scenarios', () => {
    let loginActions: LoginActions;

    test.beforeEach(async ({ page }) => {
        loginActions = new LoginActions(page);
    });

    test('should login successfully with valid credentials', async () => {
        await loginActions.navigateTo('https://www.saucedemo.com/');
        await loginActions.login('standard_user', 'secret_sauce');

        const welcomeMessage = await loginActions.getWelcomeMessage();
        expect(welcomeMessage).toBe('Products');
    });
});
