import { useState } from "react";
import { restaurants, foodMenus, categories } from "./data/restaurant.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import Footer from "./components/Footer.jsx";
import MyBookings from "./components/MyBookings.jsx";
import MyOrders from "./components/MyOrders.jsx";
import BookingModal from "./components/BookingModel.jsx";
import { X, ArrowRight } from "lucide-react";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import {
  Search,
  MapPin,
  Utensils,
  CalendarDays,
  Star,
  Clock,
  Heart,
  Menu,
} from "lucide-react";
import "./App.css";


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("19:00");
  const [guests, setGuests] = useState("2");
  const [tablePreference, setTablePreference] = useState("Indoor");
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [orders, setOrders] = useState(() => {
  return JSON.parse(localStorage.getItem("districtOrders")) || [];
});
  const [reservations, setReservations] = useState(() => {
  return JSON.parse(
    localStorage.getItem("districtReservations") || "[]"
  );
});
  const [showSignIn, setShowSignIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("districtUser")) || null
  );
  const [showSignUp, setShowSignUp] = useState(false);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || restaurant.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleBooking = (restaurant) => {
  setSelectedRestaurant(restaurant);
  setBookingDate("");
  setBookingTime("19:00");
  setGuests("2");
  setTablePreference("Indoor");
  setBookingConfirmation(null);
};

  return (
    <div className="district-app">
      <header className="navbar">
        <a href="#home" className="logo">
          district<span>.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

         <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setShowSignIn={setShowSignIn}
          />

        <button className="login-btn" onClick={() => setShowSignIn(true)}>
          Sign in
        </button>
      </header>

      <main>
        <Hero />
        <section className="search-section">
          <div className="search-heading">
            <span>FIND YOUR NEXT FAVOURITE</span>
            <h2>Where would you like to dine?</h2>
          </div>

          <div className="search-box">
            <Search size={21} />
            <input
              type="text"
              placeholder="Search restaurants, cuisine or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" })}>
              Search
            </button>
          </div>
        </section>

        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          categories={categories}
          category={category}
          setCategory={setCategory}
          handleBooking={handleBooking}
          setSearch={setSearch}
        />

        <section className="how-section" id="how-it-works">
          <span>DINING MADE SIMPLE</span>
          <h2>Reserve. Pre-order. Enjoy.</h2>

          <div className="how-grid">
            <div>
              <Search size={28} />
              <h3>Discover</h3>
              <p>Explore restaurants and find your perfect dining spot.</p>
            </div>
            <div>
              <CalendarDays size={28} />
              <h3>Reserve</h3>
              <p>Choose your date, time and preferred table.</p>
            </div>
            <div>
              <Utensils size={28} />
              <h3>Pre-order</h3>
              <p>Select your favourite food before reaching the restaurant.</p>
            </div>
          </div>
        </section>

        <MyBookings reservations={reservations} />
        <MyOrders orders={orders} />
      </main>

      {showSignIn && (
          <SignIn
            onClose={() => setShowSignIn(false)}
            onLogin={(user) => setLoggedInUser(user)}
            onCreateAccount={() => {
              setShowSignIn(false);
              setShowSignUp(true);
            }}
          />
       )}

       {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          onRegister={(user) => setLoggedInUser(user)}
          />
       )}

      {selectedRestaurant && (
  <BookingModal
    selectedRestaurant={selectedRestaurant}
    setSelectedRestaurant={setSelectedRestaurant}
    bookingConfirmation={bookingConfirmation}
    setBookingConfirmation={setBookingConfirmation}
    bookingDate={bookingDate}
    setBookingDate={setBookingDate}
    bookingTime={bookingTime}
    setBookingTime={setBookingTime}
    guests={guests}
    setGuests={setGuests}
    tablePreference={tablePreference}
    setTablePreference={setTablePreference}
    reservations={reservations}
    setReservations={setReservations}
    showFoodMenu={showFoodMenu}
    setShowFoodMenu={setShowFoodMenu}
    foodMenus={foodMenus}
    cart={cart}
    setCart={setCart}
    orders={orders}
    setOrders={setOrders}
  />
)}
      
          
      <footer />
    </div>
  );
}

export default App;