import RestaurantDb from '../data/restaurant-db';

const PostReviewHelper = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  RestaurantDb.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.review-container');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
        <div class="review-card">
            <div class="avatar">
                <img src="https://source.unsplash.com/random/200x200/?cat">
            </div>
            <div class="review">
                <p class="review-name">${name}</p>
                <span>${date}</span>
                <p>${review}</p>
            </div>
        </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReviewHelper;
