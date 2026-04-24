import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recip"; // Ma'lumotlar yo'li
import "../styles/product__page.css"; // Mavjud stillardan foydalanamiz
import AOS from "aos";
import "aos/dist/aos.css";

// Retseptlar uchun rasmlarni import qilish (assets papkangizdagi nomlarga moslang)

const imageMap = {
  "protein-bowl": "",
  "energy-balls":"" ,
  "honey-chicken":"" ,
};

const RecipePage = () => {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Sahifa ochilganda tepaga qaytish
  }, []);

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="container" style={{ color: "white", padding: "100px" }}>
        <h2>Retsept topilmadi</h2>
        <Link to="/recipes" className="back-link">← Orqaga qaytish</Link>
      </div>
    );
  }

  const imgSrc = imageMap[recipe.image];

  return (
    <div className="product-page recipe-page">
      <div className="container">
        <Link to="/" className="back-link">
          ← Barcha retseptlar
        </Link>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-image" data-aos="fade-right">
            <img src={imgSrc} alt={recipe.name} />
          </div>

          <div className="hero-content" data-aos="fade-left">
            <span className="emoji">{recipe.emoji}</span>
            <h1 className="title">{recipe.name}</h1>
            <p className="price-tag" style={{ color: "#c9cf43" }}>
              ⏳ Tayyorlanish vaqti: {recipe.vaqti}
            </p>

            <div className="info-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Kerakli masalliqlar
              </h3>
              <ul>
                {recipe.tarkibi.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="info-grid">
          {/* Tayyorlanish jarayoni */}
          <div className="info-card" data-aos="fade-right">
            <h3>👨‍🍳 Tayyorlanish bosqichlari</h3>
            <ul className="cooking-steps">
              {recipe.tayyorlanishi.map((step, i) => (
                <li key={i} style={{ marginBottom: "15px", listStyle: "none" }}>
                  <span style={{ color: "#c9cf43", fontWeight: "bold", marginRight: "10px" }}>
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="right-cards">
            {/* Kaloriya */}
            <div className="info-card" data-aos="fade-left">
              <h3>Energetik qiymati</h3>
              <ul>
                {recipe.kaloriya.map((k, i) => (
                  <li key={i} className="bold">🔥 {k}</li>
                ))}
              </ul>
            </div>

            {/* Foydali jihatlari */}
            <div className="info-card" data-aos="fade-left">
              <h3>Nega bu retsept foydali?</h3>
              <ul>
                {recipe.ustuvorlik.map((u, i) => (
                  <li key={i}>⭐ {u}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;