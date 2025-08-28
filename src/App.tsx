import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Vérifie si l'utilisateur avait déjà choisi un mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="App">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">
          <h1>Nom de votre salon</h1>
        </div>
        <nav>
          <a href="#services">Prestations</a>
          <a href="#booking">Réservations</a>
          <a href="#reviews">Retours</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Toggle Dark/Light Mode */}
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <h2>Bienvenue chez [Votre Nom]</h2>
        <p>
          Découvrez une expérience unique et élégante, pensée pour mettre en
          valeur votre beauté et votre bien-être.
        </p>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="services">
        <h2>Nos Prestations</h2>
        <div className="cards">
          <div className="card">
            <img src="/1.png" alt="Head Spa" />
            <h3>Head spa</h3>
            <p>45 €</p>
          </div>
          <div className="card">
            <img src="/2.png" alt="Gel X" />
            <h3>Gel X</h3>
            <p>35 €</p>
          </div>
          <div className="card">
            <img src="/3.png" alt="Soin du Corps" />
            <h3>Soin du Corps</h3>
            <p>30 €</p>
          </div>
          <div className="card">
            <img src="/4.png" alt="BrowLift" />
            <h3>BrowLift</h3>
            <p>40 €</p>
          </div>
        </div>
      </section>

      {/* ===== BOOKING ===== */}
      <section id="booking" className="booking">
        <h2>Réservez votre séance</h2>
        <form>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <select required>
            <option value="">Choisir un service</option>
            <option>Service 1</option>
            <option>Service 2</option>
            <option>Service 3</option>
          </select>
          <textarea placeholder="Message ou demande particulière"></textarea>
          <button type="submit">Réserver</button>
        </form>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="reviews">
        <h2>Retours de nos clientes</h2>
        <div className="review-gallery">
          <img src="/cliente1.png" alt="Retour cliente 1" />
          <img src="/cliente2.png" alt="Retour cliente 2" />
          <img src="/cliente3.png" alt="Retour cliente 3" />
          <img src="/cliente4.png" alt="Retour cliente 4" />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>📍 Adresse : 123 Rue Élégance, Paris</p>
        <p>📞 Téléphone : 01 23 45 67 89</p>
        <p>📧 Email : contact@votresite.com</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2025 Votre Marque – Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
