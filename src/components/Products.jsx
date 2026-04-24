import React, { useState, useEffect } from "react";
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

// 💰 Narxlar obyekti (Siz aytgan narxlar)
const priceMap = {
  "proteinli-granola": 8000,
  "proteinli-pancake": 10000,
  "ovsyanka-pechenye": 15000,
  "proteinli-shokolad": 10000,
  "proteinli-pudding": 15000,
  "crackers": 8000
};

const Products = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setCart(data);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("products", JSON.stringify(newCart));
    // 🔥 Header'ga signal yuborish
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);
    
    // Mahsulot kalitini (slug/image name) aniqlab olamiz narxni olish uchun
    const productKey = product.image; 

    if (exist) {
      const newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateCart(newCart);
    } else {
      const newItem = {
        id: product.id,
        title: product.name,
        price: priceMap[productKey] || 0, // 💰 Shu yerda narx qo'yiladi
        image: imageMap[product.image],
        quantity: 1
      };
      updateCart([...cart, newItem]);
    }
  };

  const increase = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decrease = (id) => {
    const newCart = cart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);
    updateCart(newCart);
  };

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
            <div className="product-card" key={product.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <Link to={`/product/${product.id}`} className="card-link">
                <div className="image-wrapper">
                  <img src={imageMap[product.image]} alt={product.name} />
                </div>

                <div className="card-content">
                  <span className="emoji">{product.emoji}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.kaloriya[0]}</p>
                  {/* 💰 Narxni kartada ko'rsatish */}
                  <p className="product-price" style={{fontWeight: 'bold', color: '#27ae60', marginTop: '5px'}}>
                    {priceMap[product.image].toLocaleString()} so'm
                  </p>
                </div>
              </Link>

              <div className="card-footer">
                {cart.find(item => item.id === product.id) ? (
                  <div className="quantity-box">
                    <button onClick={() => decrease(product.id)} className="q-btn">-</button>
                    <span className="q-num">{cart.find(item => item.id === product.id).quantity}</span>
                    <button onClick={() => increase(product.id)} className="q-btn">+</button>
                  </div>
                ) : (
                  <button
                    className="buy-btn"
                    onClick={() => addToCart(product)}
                  >
                    Buyurtma berish
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;