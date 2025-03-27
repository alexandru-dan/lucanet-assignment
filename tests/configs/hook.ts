import {test} from "./fixture/BaseFixtures";

test.afterAll(async ({ browser, logger }) => {
    // Iterate through all browser contexts and clear data
    logger.log(`Clearing cookies and permissions!`);
    const contexts = browser.contexts();
    for (const context of contexts) {
        await context.clearCookies();
        await context.clearPermissions();
        logger.log(`Cleared cookies and permissions for context: ${context}`);
        // You can also clear storage here if necessary
    }
});
