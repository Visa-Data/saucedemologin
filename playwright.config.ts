import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html']],
  use: {
    headless: false,          // show browser
    screenshot: 'on',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000            // slow down each action by 1 second
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
