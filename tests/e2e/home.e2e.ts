import { test, expect } from '@playwright/test';

test.describe('MerzSoft - Página principal', () => {
  test('debe cargar la aplicación correctamente', async ({ page }) => {
    const response = await page.goto('/');

    expect(response?.ok()).toBe(true);

    await expect(page.locator('#app')).toBeVisible();
    await expect(page.locator('#app')).not.toBeEmpty();
  });
});
