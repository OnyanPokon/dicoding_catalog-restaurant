import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url_parser';
import PostReview from '../../utils/send-review-helper';
import { createCategoryElements, createMenuCard, createReviewCard } from './card';

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
                <div>
                    <h1>${restaurant.name}</h1>
                    
                    <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
                    (${restaurant.city})
                </div>
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
        <div class="add-review">
            <div class="review-head">
                <div class="user-profile">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="review-form">
                    <form action="/action_page.php">
                        <div class="form-control">
                            <input name="inputName" type="text" id="inputName" placeholder="Masukan Nama Kamu">
                        </div>  
                        <div class="form-control">
                            <textarea name="review-text" id="inputReview">masukan komentarmu</textarea>
                        </div>    
                        <button class="regular" type="submit" id="submit-review">Sumbit Review</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="review-container">
            ${reviewElements}
        </div>
    </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart-circle-check" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailRestaurantTemplate, createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};