
Feature('On reaching the google homepage');

Scenario('The search button displays correct text', ({ I, homePage }) => {
    I.amOnPage('/');
    I.click({xpath: '//div[@class="FPdoLc lJ9FBc"]//input[1]'});  
    I.wait(3); 
});

Scenario('The lucky button displays correct text', async ({ I, homePage }) => {
    I.amOnPage('/');
    I.click({xpath: '//div[@class="FPdoLc lJ9FBc"]//input[2]'});
    I.wait(3);
});