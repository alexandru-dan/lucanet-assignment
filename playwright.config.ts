import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  testDir: './tests',  // Path to tests
  reporter: [
    ['line'],  // Optionally use other reporters (e.g., 'dot', 'html', 'junit', etc.)
    ['allure-playwright', {
        outputFolder: 'allure-results',
        suiteTitle: 'Lucanet Test Suite',
        testTitleTemplate: (test: { title: any; }) => `${test.title} - Custom Title`
        }]
  ],
  workers: 5,  // Number of parallel test workers
  timeout: 30000,  // Test timeout in ms
  fullyParallel: true,
  use: {
    baseURL: process.env.BASE_URL,  // Use environment variable
    headless: false,  // Run in headless mode
    viewport: null,
    screenshot: 'only-on-failure',  // Take screenshot if test fails
    video: 'retain-on-failure',  // Keep video on failure
  },
  projects: [
    {
      name: 'Lucanet',  // Test configuration for desktop browsers
      use: {
        browserName: 'chromium',  // Use Chromium by default
        channel: 'chrome',  // Use Chrome browser specifically
        launchOptions: {
          args: ['--start-maximized'],  // Maximize the window on start
        },
      },
    }]
});
