import {test} from '../configs/fixture/BaseFixtures';
import {expect} from "@playwright/test";

test('Verify that the user is redirected to the search page - 1st variant', async ({ lucanet }) => {

        await lucanet.home()
            //Check top navigation elements are displayed
        .then(HomePage => HomePage.topNavigationPage.verifyElementsAreDisplayed())
            //Close the ad
        .then(HomePage => HomePage.topNavigationPage.closeAd())
            //Click on search input from navigation
        .then(HomePage => HomePage.topNavigationPage.openSearchModal())
            //Verify that the search modal is displayed
        .then(SearchModal => SearchModal.verifyElementsAreDisplayed())
            //Close search modal
        .then(SearchModal => SearchModal.closeSearchModal())
            //Verify that we returned to the home page and check top navigation elements are displayed
        .then(HomePage => HomePage.topNavigationPage.verifyElementsAreDisplayed())
            //Check footer elements are displayed
        .then(HomePage => HomePage.footerPage.verifyElementsAreDisplayed());
});
test('Verify that the user is redirected to the search page - 2nd variant', async ({ lucanet }) => {
        const homePage = await lucanet.home();
        await homePage.topNavigationPage.verifyElementsAreDisplayed();
        await homePage.topNavigationPage.closeAd();
        const searchModal = await homePage.topNavigationPage.openSearchModal();
        await searchModal.verifyElementsAreDisplayed();
        await searchModal.closeSearchModal();
        await homePage.topNavigationPage.verifyElementsAreDisplayed();
        await homePage.footerPage.verifyElementsAreDisplayed();
});
test('Verify that the user is redirected to the search page - 3rd variant', async ({ lucanet }) => {

        const homePage = await lucanet.home();
        //Check top navigation elements are displayed
        expect(homePage.topNavigationPage.changeLanguageButton.isVisible()).toBeTruthy();
        expect(homePage.topNavigationPage.searchButton.isVisible()).toBeTruthy();
        expect(homePage.topNavigationPage.careersButton.isVisible()).toBeTruthy();
        expect(homePage.topNavigationPage.partnerLoginButton.isVisible()).toBeTruthy();
        expect(homePage.topNavigationPage.customerLoginButton.isVisible()).toBeTruthy();

        //Check hero elements are displayed
        expect(homePage.requestDemoButton.isVisible()).toBeTruthy();
        expect(homePage.exploreSolutionsButton.isVisible()).toBeTruthy();

        //Close the ad
        await homePage.topNavigationPage.closeAd();
        //Verify that ads modal isn't displayed
        expect(homePage.topNavigationPage.ads.isHidden()).toBeTruthy();
        //Click on search input from navigation
        const searchModal = await homePage.topNavigationPage.openSearchModal();
        expect(searchModal.searchButton.isVisible()).toBeTruthy();
        expect(searchModal.inputField.isVisible()).toBeTruthy();
        expect(searchModal.closeButton.isVisible()).toBeTruthy();
        //Close search modal
        await searchModal.closeSearchModal();
        //Verify that we returned to the home page and check footer elements are displayed
        expect(homePage.footerPage.support.isVisible()).toBeTruthy();
        expect(homePage.footerPage.contactUs.isVisible()).toBeTruthy();
});