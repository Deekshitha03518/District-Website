import {
  Heart,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Search
} from "lucide-react";

function RestaurantList({
  filteredRestaurants,
  categories,
  category,
  setCategory,
  handleBooking,
  setSearch
}) {
  return (
    <section className="restaurants-section" id="restaurants">
      <div className="section-heading">
        <div>
          <span>EXPLORE AND DISCOVER</span>
          <h2>Restaurants near you</h2>
          <p>Find the perfect place for your next meal.</p>
        </div>
        <span className="restaurant-count">
          {filteredRestaurants.length} restaurants
        </span>
      </div>

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "category active" : "category"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="restaurant-grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <article className="restaurant-card" key={restaurant.id}>
              <div className="restaurant-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <button
                  className="favourite-btn"
                  aria-label={`Save ${restaurant.name}`}
                  onClick={() => alert(`${restaurant.name} selected!`)}
                >
                  <Heart size={19} />
                </button>
                <span className="image-label">POPULAR</span>
              </div>

              <div className="restaurant-info">
                <div className="restaurant-title">
                  <h3>{restaurant.name}</h3>
                  <span className="rating">
                    <Star size={14} fill="currentColor" />
                    {restaurant.rating}
                  </span>
                </div>

                <p className="cuisine">{restaurant.cuisine}</p>

                <p className="location">
                  <MapPin size={15} />
                  {restaurant.location}
                </p>

                <div className="restaurant-meta">
                  <span><Clock size={14} /> {restaurant.time}</span>
                  <span>{restaurant.price}</span>
                </div>

                <button
                  className="book-btn"
                  onClick={() => handleBooking(restaurant)}
                >
                  Book a table <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <Search size={30} />
            <h3>No restaurants found</h3>
            <p>Try another restaurant name or category.</p>
            <button onClick={() => {
              setSearch("");
              setCategory("All");
            }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default RestaurantList;