import RestaurantDb from '../../data/restaurant-db';
import UrlParser from '../../routes/url_parser';
import likeButtonInitiatior from '../../utils/like-button-initiator';
import { createDetailRestaurantTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="detail" >
          <div id="restaurant-detail-contianer" class="detail-container">
          </div>
          <div id="likeButtonContainer"></div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseWithoutCombiner();
    const restaurant = await RestaurantDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail-contianer');

    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
    likeButtonInitiatior.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
