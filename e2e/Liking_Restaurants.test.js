Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('tidak ada film untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');
});
