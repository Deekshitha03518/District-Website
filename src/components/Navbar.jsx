function Navbar({ menuOpen, setMenuOpen , setShowSignIn }) {
  return (
    <nav className={menuOpen ? "nav-links open" : "nav-links"}>
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#restaurants" onClick={() => setMenuOpen(false)}>Restaurants</a>
      <a href="#my-bookings" onClick={() => setMenuOpen(false)}>My Bookings</a>
      <a href="#my-orders" onClick={() => setMenuOpen(false)}>My Orders</a>
      <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
    </nav>
  );
  <button
    className="signin-nav-btn"
    onClick={() => setShowSignIn(true)}
    >
    Sign In
    </button>
}

export default Navbar;