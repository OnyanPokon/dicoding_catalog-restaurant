const getRandomImage = (type, i) => `https://source.unsplash.com/random/${200 + i}x${200 + i}/?${type}`;

const createMenuCard = (foodOrDrink, i, type) => `
        <div class="menu-card">
            <img src="${getRandomImage(type, i)}" alt="food and drink">
            <p>${foodOrDrink.name}</p>
            <span class="badge">
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </span>
        </div>
    `;

const createReviewCard = (review, i) => `
        <div class="review-card">
            <div class="avatar">
                <img src="${getRandomImage('avatar', i)}" alt="profile picture">
            </div>
            <div class="review">
                <p class="review-name">${review.name}</p>
                <span>${review.date}</span>
                <p>${review.review}</p>
            </div>
        </div>
    `;

const createCategoryElements = (categories) => categories.map((category) => `<span class="category-item">${category.name}</span>`).join('');

export {
  createCategoryElements, createReviewCard, createMenuCard,
};
