import React from 'react';
import "../styles/rec.css"
import { recipes } from '../data/recip';
import { NavLink } from 'react-router-dom';
const RecipeList = () => {
  return (
    <section className="products-section">
      <h1 data-aos="fade-up" className="r1 products-title aos-init aos-animate">Sog'lom Retseptlarimiz</h1>
      <p data-aos="fade-up" className=" rp products-subtitle aos-init aos-animate">Tabiiy, kam kaloriyali va foydali taomlar</p>

      <div className="products-grid">
        {recipes.map((item) => (
         <NavLink to={`/recipe/${item.id}`} key={item.id} className="product-card" data-aos="fade-up">
             <div key={item.id} className="product-card" >
            <div className="card-image">
              {/* Rasm yo'lini o'z loyihangizga moslang */}
              <img src={`images/${item.image}.jpg`} alt={item.name} />
            </div>
            <div className="card-content">
              <span className="emoji">{item.emoji}</span>
              <h3 className='product-name'>{item.name}</h3>
              <p className="product-desc">{item.kaloriya[0]}</p>
              {/* Bu tugma bosilganda o'sha ID bo'yicha sahifaga o'tiladi */}
              <button className="view-btn">Retseptni ko'rish</button>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;