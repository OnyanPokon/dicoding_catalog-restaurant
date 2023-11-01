import RestaurantDb from '../../data/restaurant-db';
import UrlParser from '../../routes/url_parser';
import likeButtonInitiatior from '../../utils/like-button-presenter';
import PostReviewHelper from '../../utils/review-post-helper';
import { createDetailRestaurantTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="detail" >
          <div id="restaurant-detail-contianer" class="detail-container">
          </div>
          <div id="likeButtonContainer"></div>
        </section>
        <section class="add-review" >
          <h3>Leave Some Review</h3>
          <div id="add-review-container" class="add-review-container">
            <form>
              <input type="text" placeholder="send review as" id="input-name" name="inputName">
              <textarea name="inputReview" id="input-review" placeholder="place your review here"></textarea>
              <button class="regular" id="submit-review" type="submit">Send</button>
            </form>
          </div>
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

    const btnSubmit = document.querySelector('#submit-review');
    const inputName = document.querySelector('#input-name');
    const inputReview = document.querySelector('#input-review');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputName.value === '' || inputReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        inputName.value = '';
        inputReview.value = '';
      } else {
        PostReviewHelper(url, inputName.value, inputReview.value);
        inputName.value = '';
        inputReview.value = '';
      }
    });
  },
};

export default Detail;
