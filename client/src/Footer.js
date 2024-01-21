import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to Exalt, where fashion meets elevation! Discover a curated collection of chic and trendy apparel that transcends ordinary style. Elevate your wardrobe with our carefully selected pieces that blend comfort, quality, and a touch of sophistication.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Have questions or just want to say hello? Reach out to us at Exalt! Our friendly team is here to assist you. Drop us a message via email at info@exaltfashion.com or give us a call at 5498236590. We look forward to hearing from you!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Exalt</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
