import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className='container grid2'>
          <div className='box'>
            <h1 className="primary-heading">Bonik</h1>
            <p className="footer-description">Your trusted online shopping destination for the latest products, great deals, and seamless experiences. Shop with ease, every day!</p>
           
          </div>

          <div className='box'>
            <h2 className="secondary-heading">About Us</h2>
            <ul className="footer-lists">
              <li><a href="#" className="footer-links">Careers</a></li>
              <li><a href="#" className="footer-links">Our Stores</a></li>
              <li><a href="#" className="footer-links">Our Cares</a></li>
              <li><a href="#" className="footer-links">Terms & Conditions</a></li>
              <li><a href="#" className="footer-links">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='box'>
            <h2 className="secondary-heading">Customer Care</h2>
            <ul className="footer-lists">
              <li><a href="#" className="footer-links">Help Center</a></li>
              <li><a href="#" className="footer-links">How to Buy</a></li>
              <li><a href="#" className="footer-links">Track Your Order</a></li>
              <li><a href="#" className="footer-links">Corporate & Bulk Purchasing</a></li>
              <li><a href="#" className="footer-links">Returns & Refunds</a></li>
            </ul>
          </div>
          <div className='box'>
            <h2 className="secondary-heading">Contact Us</h2>
            <ul className="footer-lists">
              <li><a href="#"  className="footer-links">Wadi, Vaodoara, India, 390017</a></li>
              <li><a href="mailto:webliftstudio@gmail.com" className="footer-links">Send Email</a></li>
              <li><a href="tel:+91 9723783166" className="footer-links">+91 9723783166</a></li>
              <li><a href="http://webliftstudio.rf.gd/" target="_blank" className="footer-links">Contact Us</a> </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
