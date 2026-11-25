import { X, ArrowRight } from "lucide-react";

function BookingModal({
  selectedRestaurant,
  setSelectedRestaurant,
  bookingConfirmation,
  setBookingConfirmation,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  guests,
  setGuests,
  tablePreference,
  setTablePreference,
  reservations,
  setReservations,
  showFoodMenu,
  setShowFoodMenu,
  foodMenus,
  cart,
  setCart,
  orders,
  setOrders
}) {
  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button
          type="button"
          className="close-booking"
          onClick={() => setSelectedRestaurant(null)}
        >
          CLOSE
          <button
                type="button"
                className="close-booking"
                style={{
                    display: "block",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 99999,
                    background: "red",
                    color: "white",
                    width: "70px",
                    height: "40px",
                    border: "2px solid black"
                }}
                onClick={() => setSelectedRestaurant(null)}
                >
                CLOSE
            </button>
        </button>

        {bookingConfirmation ? (
          <div className="booking-success">
            <div className="success-icon">✓</div>
            <h2>Reservation Confirmed!</h2>
            <p>Your table reservation has been recorded.</p>

            <div className="confirmation-details">
              <h3>{bookingConfirmation.restaurant}</h3>
              <p>Date: {bookingConfirmation.date}</p>
              <p>Time: {bookingConfirmation.time}</p>
              <p>Guests: {bookingConfirmation.guests}</p>
              <p>Table preference: {bookingConfirmation.preference}</p>
              <p>Booking ID: {bookingConfirmation.id}</p>
            </div>

            <button
              className="book-btn"
              onClick={() => {
                setSelectedRestaurant(null);
                setBookingConfirmation(null);
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="booking-eyebrow">
              RESERVE YOUR EXPERIENCE
            </span>

            <h2>Book your table</h2>

            <p className="booking-restaurant-name">
              {selectedRestaurant.name}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const newBooking = {
                  restaurant: selectedRestaurant.name,
                  date: bookingDate,
                  time: bookingTime,
                  guests: guests,
                  preference: tablePreference,
                  id: "DST" + Date.now().toString().slice(-7)
                };

                const updatedReservations = [...reservations, newBooking];

                setReservations(updatedReservations);

                localStorage.setItem(
                  "districtReservations",
                  JSON.stringify(updatedReservations)
                );

                setBookingConfirmation(newBooking);
              }}
            >
              <label>Reservation date</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />

              <label>Reservation time</label>
              <select
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
              >
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>

              <label>Number of guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>

              <label>Table preference</label>
              <select
                value={tablePreference}
                onChange={(e) => setTablePreference(e.target.value)}
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Window">Window seating</option>
              </select>

              <button type="submit" className="book-btn confirm-booking">
                Confirm Reservation <ArrowRight size={17} />
              </button>
            </form>

            <button
              type="button"
              className="book-btn confirm-booking"
              onClick={() => setShowFoodMenu(!showFoodMenu)}
            >
              {showFoodMenu ? "Hide Food Menu" : "Browse Menu & Pre-order"}
              <ArrowRight size={17} />
            </button>

            {showFoodMenu && (
              <div className="food-menu-section">
                <h3>Food Menu</h3>
                <p>Choose your favourite food items.</p>

                {(foodMenus[selectedRestaurant.name] || []).map((item) => (
                  <div className="food-menu-item" key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.category}</p>
                      <span>₹{item.price}</span>
                    </div>

                    <button
                      onClick={() => {
                        setCart((previousCart) => {
                          const existingItem = previousCart.find(
                            (food) => food.id === item.id
                          );

                          if (existingItem) {
                            return previousCart.map((food) =>
                              food.id === item.id
                                ? { ...food, quantity: food.quantity + 1 }
                                : food
                            );
                          }

                          return [...previousCart, { ...item, quantity: 1 }];
                        });
                      }}
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="cart-section">
                <h3>Your Food Order</h3>

                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <span>{item.name} × {item.quantity}</span>
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                ))}

                <div className="cart-total">
                  <strong>Total Amount</strong>
                  <strong>
                    ₹{cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </strong>
                </div>
              </div>
            )}

            {cart.length > 0 && (
              <div className="checkout-section">
                <h3>Checkout</h3>

                <label>Payment Method</label>

                <select id="paymentMethod">
                  <option value="Online Payment">Online Payment</option>
                  <option value="Pay at Restaurant">Pay at Restaurant</option>
                </select>

                <button
                  type="button"
                  className="book-btn confirm-booking"
                  onClick={() => {
                    const total = cart.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    );

                    const newOrder = {
                      id: "ORD" + Date.now(),
                      restaurant: selectedRestaurant.name,
                      items: cart,
                      total: total,
                      paymentMethod: document.getElementById("paymentMethod").value,
                      date: bookingDate,
                      time: bookingTime,
                      guests: guests
                    };

                    const updatedOrders = [...orders, newOrder];

                    setOrders(updatedOrders);

                    localStorage.setItem(
                      "districtOrders",
                      JSON.stringify(updatedOrders)
                    );

                    alert("Food order placed successfully! Total: ₹" + total);

                    setCart([]);
                  }}
                >
                  Place Food Order
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BookingModal;