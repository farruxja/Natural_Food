import React, { useState, useEffect } from "react"; // useState va useEffect qo'shildi
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

// 💰 Narxlar obyekti
const priceMap = {
  "proteinli-granola": 8000,
  "proteinli-pancake": 10000,
  "ovsyanka-pechenye": 15000,
  "proteinli-shokolad": 10000,
  "proteinli-pudding": 15000,
  "crackers": 8000
};

const ProductPage = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  // 1. Savatchani yuklash
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setCart(data);
  }, []);

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Mahsulot topilmadi</h2>;

  const imgSrc = imageMap[product.image];
  const currentItem = cart.find(item => item.id === product.id);

  // 2. Yangilash funksiyasi
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("products", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated")); // Header yangilanishi uchun
  };

  const addToCart = () => {
    const newItem = {
      id: product.id,
      title: product.name,
      price: priceMap[product.image] || 0,
      image: imageMap[product.image],
      quantity: 1
    };
    updateCart([...cart, newItem]);
  };

  const increase = () => {
    const newCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decrease = () => {
    const newCart = cart
      .map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);
    updateCart(newCart);
  };

  return (
    <div className="product-page">
      <div className="container">
        <Link to="/" className="back-link">
          ← Barcha mahsulotlar
        </Link>

        <div className="hero">
          <div className="hero-image" data-aos="fade-right">
            <img src={imgSrc} alt={product.name} />
          </div>

    

<div className="hero-content" data-aos="fade-left">
  <span className="emoji">{product.emoji}</span>
  <h1 className="title">{product.name}</h1>
  <p className="price-tag">{priceMap[product.image].toLocaleString()} so'm</p>

  {/* 🔥 Buyurtma berish qismi - Endi hero-content ichida va chapda */}
  <div className="order-section-compact">
    {currentItem ? (
      <div className="quantity-box-compact">
        <button onClick={decrease} className="q-btn-sm">-</button>
        <span className="q-num-sm">{currentItem.quantity}</span>
        <button onClick={increase} className="q-btn-sm">+</button>
      </div>
    ) : (
      <button className="buy-btn-sm" onClick={addToCart}>
        Buyurtma berish
      </button>
    )}
  </div>

  <div className="info-card">
    <h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-checks w-4 h-4">
        <path d="m3 17 2 2 4-4"></path>
        <path d="m3 7 2 2 4-4"></path>
        <path d="M13 6h8"></path>
        <path d="M13 12h8"></path>
        <path d="M13 18h8"></path>
      </svg> 
      Tarkibi
    </h3>
    <ul>
      {product.tarkibi.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </div>
</div>
        </div>

    

        <div className="info-grid">
          <div className="info-card" data-aos="fade-right">
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
            <div className="info-card" data-aos="fade-left">
              <h3>Kaloriyasi</h3>
              <ul>
                {product.kaloriya.map((k, i) => (
                  <li key={i} className="bold">{k}</li>
                ))}
              </ul>
            </div>
            <div className="info-card" data-aos="fade-left">
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