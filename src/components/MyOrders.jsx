function MyOrders({ orders }) {
  return (
    <section id="my-orders" className="my-orders-section">
      <div className="section-heading">
        <span className="section-eyebrow">YOUR FOOD ORDERS</span>
        <h2>My Orders</h2>
        <p>View your restaurant pre-orders.</p>
      </div>

      {orders.length === 0 ? (
        <p>You have no food orders yet.</p>
      ) : (
        <div className="my-orders-list">
          {orders.map((order) => (
            <div className="my-order-card" key={order.id}>
              <h3>{order.restaurant}</h3>

              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Reservation date:</strong> {order.date}</p>
              <p><strong>Time:</strong> {order.time}</p>

              <h4>Food Items</h4>

              {order.items.map((item) => (
                <p key={item.id}>
                  {item.name} × {item.quantity}
                </p>
              ))}

              <p><strong>Total: ₹{order.total}</strong></p>
              <p><strong>Payment:</strong> {order.paymentMethod}</p>

              <span className="booking-status">Order Placed</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyOrders;