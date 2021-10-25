const assert = require('assert');
Feature('On reaching the google homepage');

Scenario('The search button displays correct text', async({ I, homePage }) => {
    I.amOnPage('/');
    let buttonText = await I.grabValueFrom(homePage.searchButton);
    assert.equal(buttonText,'Google Search');
    I.click(homePage.searchButton);
});

Scenario('The lucky button displays correct text', async ({ I, homePage }) => {
    I.amOnPage('/');
    let buttonText = await I.grabValueFrom(homePage.luckyButton);
    assert.equal(buttonText,'I\'m Feeling Lucky');
    I.click(homePage.luckyButton);
});