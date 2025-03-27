import {test} from "../configs/fixture/BaseFixtures";

test('[PartnerLogin]Try to login with invalid credentials - 1st variant', async ({ lucanet }) => {
    await lucanet.home()
        .then(homePage => homePage.topNavigationPage.closeAd())
        .then(homePage => homePage.topNavigationPage.goToPartnerLogin())
        .then(PartnerLoginPage => PartnerLoginPage.login('invalid', 'invalid'))
        .then(PartnerLoginPage => PartnerLoginPage.verifyErrorIsDisplayed());
});
test('[PartnerLogin]Try to login with invalid credentials - 2nd variant', async ({ lucanet }) => {
    await lucanet.home()
        .then(homePage => homePage.topNavigationPage.closeAd())
        .then(homePage => homePage.topNavigationPage.goToPartnerLogin())
        .then(PartnerLoginPage => PartnerLoginPage.insertUsername('username'))
        .then(PartnerLoginPage => PartnerLoginPage.insertPassword('password'))
        .then(PartnerLoginPage => PartnerLoginPage.clickLoginButton())
        .then(PartnerLoginPage => PartnerLoginPage.verifyErrorIsDisplayed());
});