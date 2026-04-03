import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "../styles/products.css";

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
const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">

        <div className="products-header">
          <h2 className="products-title" data-aos="fade-up">
            Mahsulotlarimiz Ro'yxati
          </h2>
          <p className="products-subtitle" data-aos="fade-up">
            Tabiiy, kam kaloriyali, foydali
          </p>
        </div>

        <div className="products-grid" data-aos="fade-up">
          {products.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="image-wrapper">
                <img
                  src={imageMap[product.image]}
                  alt={product.name}
                />
              </div>

              <div className="card-content">
                <span className="emoji">{product.emoji}</span>

                <h3 className="product-name">
                  {product.name}
                </h3>

                <p className="product-desc">
                  {product.kaloriya[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;