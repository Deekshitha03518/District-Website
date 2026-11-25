function MyBookings({ reservations }) {
  return (
    <section id="my-bookings" className="my-bookings-section">
      <div className="section-heading">
        <span className="section-eyebrow">YOUR RESERVATIONS</span>
        <h2>My Bookings</h2>
        <p>View and manage your restaurant reservations.</p>
      </div>

      {reservations.length === 0 ? (
        <p className="no-bookings">
          You have no reservations yet.
        </p>
      ) : (
        <div className="my-bookings-list">
          {reservations.map((booking) => (
            <div className="my-booking-card" key={booking.id}>
              <h3>{booking.restaurant}</h3>
              <p><strong>Booking ID:</strong> {booking.id}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Guests:</strong> {booking.guests}</p>
              <p><strong>Table:</strong> {booking.preference}</p>
              <span className="booking-status">Confirmed</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyBookings;