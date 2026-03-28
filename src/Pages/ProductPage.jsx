import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/product__page.css";

// rasmlar
import ovsyanka from "../assets/ovsyanka-pechenye.jpg";
import shokolad from "../assets/proteinli-shokolad.jpg";
import pudding from "../assets/proteinli-pudding.jpg";
import crackersImg from "../assets/crackers.jpg";
import pancake from "../assets/proteinli-pancake.jpg";
import granola from "../assets/proteinli-granola.jpg";

const imageMap = {
  "ovsyanka-pechenye": ovsyanka,
  "proteinli-shokolad": shokolad,
  "proteinli-pudding": pudding,
  crackers: crackersImg,
  "proteinli-pancake": pancake,
  "proteinli-granola": granola,
};

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Mahsulot topilmadi</h2>;

  const imgSrc = imageMap[product.image];

  return (
    <div className="product-page">
      <div className="container">

        <Link to="/" className="back-link">
          ← Barcha mahsulotlar
        </Link>

        <div className="hero">
          <div className="hero-image">
            <img src={imgSrc} alt={product.name} />
          </div>

          <div className="hero-content">
            <span className="emoji">{product.emoji}</span>
            <h1 className="title">{product.name}</h1>

            <div className="info-card">
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-checks w-4 h-4"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg> Tarkibi</h3>
              <ul>
                {product.tarkibi.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="info-grid">

          <div className="info-card">
            <h3>Vitamin va minerallar</h3>

            <h4>Vitaminlar:</h4>
            <ul>
              {product.vitaminlar.vitaminlar.map((v, i) => (
                <li key={i}>✦ {v}</li>
              ))}
            </ul>

            <h4>Minerallar:</h4>
            <ul>
              {product.vitaminlar.minerallar.map((m, i) => (
                <li key={i}>✦ {m}</li>
              ))}
            </ul>
          </div>

          <div className="right-cards">

            <div className="info-card">
              <h3>Kaloriyasi</h3>
              <ul>
                {product.kaloriya.map((k, i) => (
                  <li key={i} className="bold">{k}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>Ustuvorliklari</h3>
              <ul>
                {product.ustuvorlik.map((u, i) => (
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

export default ProductPage;