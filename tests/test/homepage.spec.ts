import {test} from "../configs/fixture/BaseFixtures";

test('Verify that user is redirected to solutions page after clicking the button', async ({ lucanet }) => {
     await lucanet.home()
        .then(HomePage => HomePage.topNavigationPage.closeAd())
        .then(HomePage => HomePage.topNavigationPage.verifyElementsAreDisplayed())
        .then(HomePage => HomePage.headerPage.verifyElementsAreDisplayed())
        .then(HomePage => HomePage.footerPage.verifyElementsAreDisplayed())
        .then(HomePage => HomePage.exploreSolutions())
        .then(SolutionsPage => SolutionsPage.verifyElementsAreDisplayed())
        .then(SolutionsPage => SolutionsPage.topNavigationPage.verifyElementsAreDisplayed())
        .then(SolutionsPage => SolutionsPage.headerPage.verifyElementsAreDisplayed())
        .then(SolutionsPage => SolutionsPage.footerPage.verifyElementsAreDisplayed())
        .then(SolutionsPage => SolutionsPage.verifyElementsAreDisplayed());
})