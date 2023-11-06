const { resolvePlugin } = require('@babel/core');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

Scenario('Check if favorite page is empty', async ({ I }) => {
  I.amOnPage('/#/like');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.no-favorite-message');
  I.see('Belum ada restaurant favorite', '.no-favorite-message');
});

Scenario('add and delete resto', async ({ I }) => {
  I.amOnPage('/');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('#restaurant_name');
  const restaurantNam = locate('#restaurant_name').first();
  I.click(restaurantNam);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/like');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  I.seeElement('#restaurant_name');
  const restaurantName = locate('#restaurant_name').first();
  I.click(restaurantName);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/like');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.no-favorite-message');
  I.see('Belum ada restaurant favorite', '.no-favorite-message');
});

Scenario('add a review', async ({ I }) => {
  I.amOnPage('/');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('#restaurant_name');
  const restaurantNam = locate('#restaurant_name').first();
  I.click(restaurantNam);
  I.seeElement('#input-name');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#input-name', 'Dicoding');
  I.seeElement('#input-review');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#input-review', 'Sangat Rekomended');
  I.seeElement('#submit-review');
  I.click('#submit-review');
  await new Promise((resolve) => setTimeout(resolve, 5000));
});
