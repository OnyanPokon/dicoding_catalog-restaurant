import RestaurantDb from '../../data/restaurant-db';
import UrlParser from '../../routes/url_parser';
import { createDetailRestaurantTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="detail" >
          <div id="restaurant-detail-contianer" class="detail-container">
          </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseWithoutCombiner();
    const restaurant = await RestaurantDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail-contianer');

    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
  },
};

export default Detail;
