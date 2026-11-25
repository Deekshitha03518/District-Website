import { Utensils, ArrowRight, CalendarDays } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          <Utensils size={15} /> GOOD FOOD. GREAT EXPERIENCES.
        </span>

        <h1>
          Your table.
          <br />
          Your time.
          <br />
          <span>Your experience.</span>
        </h1>

        <p>
          Discover amazing restaurants, reserve your favourite table
          and pre-order your food before you arrive.
        </p>

        <a href="#restaurants" className="hero-btn">
          Explore restaurants <ArrowRight size={18} />
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
          alt="Beautiful restaurant dining area"
        />
        <div className="floating-card">
          <CalendarDays size={24} />
          <div>
            <strong>Skip the wait</strong>
            <span>Reserve your table in advance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;