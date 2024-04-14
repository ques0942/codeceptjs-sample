Feature('view');

Scenario('test something',  ({ I }) => {
  I.amOnPage('https://www.google.com/');
  I.fillField('q', 'test');
  I.click('Google 検索');
  I.see('test');
});
