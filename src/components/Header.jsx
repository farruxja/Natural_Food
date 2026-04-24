import React, { useRef, useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTimes, FaTrash, FaCreditCard } from "react-icons/fa";

function Header() {
  let box = useRef()
  const [cart, setCart] = useState([])

  // 1. Ma'lumotni yuklash funksiyasi
  const loadCart = () => {
    const data = JSON.parse(localStorage.getItem("products")) || []
    setCart(data)
  }

  useEffect(() => {
    loadCart() // Birinchi yuklanganda

    // 2. LocalStorage o'zgarganda (Boshqa sahifadan turib qo'shilganda)
    // Custom event yaratamiz: "cartUpdated"
    window.addEventListener('cartUpdated', loadCart)
    
    return () => {
      window.removeEventListener('cartUpdated', loadCart)
    }
  }, [])

  // 3. LocalStorage va Statni baravar yangilash
  const updateCart = (newCart) => {
    setCart(newCart)
    localStorage.setItem("products", JSON.stringify(newCart))
  }

  function taggleBox() {
    box.current.classList.toggle("box__active")
  }

  function closeBox() {
    box.current.classList.remove("box__active")
  }

  // 🔹 quantity +
  const increase = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateCart(newCart)
  }

  // 🔹 quantity - (0 bo'lsa o'chib ketadigan qilindi)
  const decrease = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0) // 0 bo'lsa filter qilib tashlaydi
    
    updateCart(updatedCart)
  }

  // 🔹 Mahsulotni butunlay o'chirish (Bekor qilish)
  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    updateCart(newCart)
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
const [showModal, setShowModal] = useState(false); // Modalni boshqarish

  // To'lovni yakunlash funksiyasi
  const handlePayment = () => {
    alert("To'lovingiz qabul qilindi! Savatcha tozalanmoqda.");
    updateCart([]); // Savatni bo'shatish
    setShowModal(false); // Modalni yopish
  };
  return (
    <header className='header'>
      {showModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <h2>To'lov Ma'lumotlari</h2>
            <div className="card-info-box">
              <FaCreditCard size={40} color="#27ae60" />
              <p className="card-number">8600 12** **** 5678</p>
              <p className="card-holder">M.... F....</p>
            </div>
            
            <div className="input-group">
              <label>Telefon raqamingiz:</label>
              <input type="text" placeholder="+998 90 123 45 67" />
            </div>

            <button className="pay-btn" onClick={handlePayment}>
              To'ladim
            </button>
          </div>
        </div>
      )}
  <div className="box" ref={box}>
  <FaTimes size={25} color="black" onClick={closeBox} className='remove' style={{cursor: "pointer"}} />
  
  <h2 style={{fontFamily: 'var(--third-family)', color: '#00331a', marginBottom: '10px'}}>Mening savatcham</h2>
  
  <div className="box__content">
    {cart.length === 0 ? (
      <div className='bosh'>
        <FaShoppingCart size={50} style={{opacity: 0.2, marginBottom: '10px'}} />
        <p>Savatchangiz hozircha bo‘sh</p>
      </div>
    ) : (
      cart.map(item => (
        <div key={item.id} className="cart__item">
          <img src={item.image} width={70} height={70} alt={item.title} />
          <div style={{flex: 1, marginLeft: "15px"}}>
            <h4>{item.title}</h4>
            <p>{item.price.toLocaleString()} so'm</p>

            <div className="quantity__controls">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            
            <button 
              onClick={() => removeItem(item.id)}
              style={{marginTop: "10px", color: "#ff4d4d", border: "none", background: "none", cursor: "pointer", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px"}}
            >
              <FaTrash size={10}/> Bekor qilish
            </button>
          </div>
        </div>
      ))
    )}
  </div>

  {cart.length > 0 && (
    <div className="total__section">
      <h3>
        <span>Jami:</span>
        <span>{totalPrice.toLocaleString()} so'm</span>
      </h3>
      <button style={{
        width: '100%', 
        padding: '15px', 
        backgroundColor: '#00331a', 
        color: 'white', 
        border: 'none', 
        borderRadius: '10px', 
        marginTop: '15px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }} onClick={() => setShowModal(true)}>
        Rasmiylashtirish
      </button>
    </div>
  )}
</div>

      <div className="header__wrapper">
        <NavLink to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <div className="header__logo__text">
              <h4>“Natural food”</h4>
              <h4>sog’ligingiz garovi</h4>
            </div>
          </div>
        </NavLink>

        <div className="header__nav">
          <a href="#hero">Home</a>
          <a href="#problem">Muammolar</a>
          <a href="#products">Mahsulotlarimiz</a>
          <a href="#retsept">Retseptlar</a>

          <div className="cart-icon-container" style={{position: 'relative', cursor: 'pointer'}}>
            <FaShoppingCart size={30} color='white' onClick={taggleBox}/>
            {cart.length > 0 && (
              <span style={{position: 'absolute', top: '-10px', right: '-10px', background: 'red', borderRadius: '50%', padding: '2px 7px', fontSize: '12px', color: 'white'}}>
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header