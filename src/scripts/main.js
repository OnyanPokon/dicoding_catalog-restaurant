const data = require('../public/data/DATA.json');

const main = () =>{

    const restaurants = data.restaurants; 
    const restaurantContainer = document.getElementById('restaurant-container');

    restaurants.forEach((restaurant) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        const description = restaurant.description.split(' ').slice(0, 20).join(' ');
        cardDiv.innerHTML = `
        <div class="card-head">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="card-desc">
            <h3>${restaurant.name}<span> (${restaurant.city}) </span></h3>
            <p>${restaurant.rating} <i class="fa-solid fa-star"></i></p>
            <p class="description">${description}</p>
        </div>
        `;
        restaurantContainer.appendChild(cardDiv);
    });

}

export default main;