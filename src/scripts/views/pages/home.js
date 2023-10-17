import RestaurantDb from '../../data/restaurant-db';

const Home = {
  async render() {
    return `
    <section class="hero" id="hero">
        <div class="overlay"></div>
        <div class="headline">
        <h1>After Taste</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non officia expedita labore consectetur vitae ea consequatur praesentium. Distinctio, dicta consequuntur. Ratione eligendi non eum autem officia quis neque vero nam placeat error beatae impedit sequi aut quos quam excepturi aspernatur, nostrum commodi, dolore harum quia? Tempora debitis nulla ipsam.</p>
        <button class="convert">Reservasi</button>
        </div>
    </section>
    <section class="find-us" id="find-us">
        <div class="container">
        </div>
        <div class="heading">
        <h2>Temukan Kami</h2>
        </div>
        <div class="grid-container" id="restaurant-container">
        
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.Restaurants();
    console.log(restaurants);
  },
};

export default Home;
