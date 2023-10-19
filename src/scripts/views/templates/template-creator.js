import CONFIG from '../../globals/config';
import { createCategoryElements, createMenuCard, createReviewCard } from './components';

const createRestaurantItemTemplate = (restaurant) => {
  const description = restaurant.description.split(' ').slice(0, 20).join(' ');
  return `
    <div class="card">
        <div class="card-head">
            <img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-desc">
            <p>${restaurant.rating} <i class="fa-solid fa-star"></i></p>
            <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a><span> (${restaurant.city}) </span></h3>
            <p class="description">${description}</p>
        </div>
    </div>
    `;
};

const createDetailRestaurantTemplate = (restaurant) => {
  const categoriesHTML = createCategoryElements(restaurant.categories);
  const foodElements = restaurant.menus.foods.map((food, i) => createMenuCard(food, i, 'food')).join('');
  const drinkElements = restaurant.menus.drinks.map((drink, i) => createMenuCard(drink, i, 'drink')).join('');
  const reviewElements = restaurant.customerReviews.map((review, i) => createReviewCard(review, i)).join('');

  return `
    <div class="col-1">
        <div class="info">
            <div class="name">
                <h1>${restaurant.name}</h1>
                
                <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
                (${restaurant.city})
            </div>
            <div class="place">
                <p><i class="fa-solid fa-location-dot"></i> ${restaurant.address} </p> 
            </div>
            <div class="category">
                ${categoriesHTML}
            </div>
            <div class="desc">
                <p>${restaurant.description}</p>
            </div>
            <div class="food-container">
                <h3>Food</h3>
                ${foodElements}
            </div>
            <div class="drink-container">
                <h3>Drink</h3>
                ${drinkElements}
            </div>
        </div>
    </div>
    <div class="col-2">
        <div class="image-placeholder">
            <img src="${CONFIG.BASE_IMG_URL + restaurant.pictureId}">
        </div>
        <div class="review-container">
            ${reviewElements}
        </div>
    </div>
    `;
};

export { createDetailRestaurantTemplate, createRestaurantItemTemplate };
