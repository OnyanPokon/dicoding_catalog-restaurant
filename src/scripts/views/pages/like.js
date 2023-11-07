import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <section class="find-us" id="find-us">
            <div class="heading">
            <h2>Liked Restaurant</h2>
            </div>
            <div class="no-favorite-page">
              <h2 class="no-favorite-message">You don't like any restaurants yet</h2>
            </div>
            <div class="grid-container" id="restaurant-container">
            
            </div>
        </section>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-container');
    const noFavContainer = document.querySelector('.no-favorite-page');

    if (restaurants.length === 0) {
      noFavContainer.style.display = 'block';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Like;
