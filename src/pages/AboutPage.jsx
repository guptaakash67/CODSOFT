import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to React E-commerce, where shopping meets convenience and style! 

At React E-commerce , we believe that shopping should be more than just a transaction; it should be an experience that excites and satisfies. Our online marketplace is designed with you in mind, offering a seamless and enjoyable shopping journey from the comfort of your home.

Discover a World of Choices:
Dive into a vast array of products carefully curated to cater to your diverse needs and desires. From fashion and beauty to home essentials and gadgets, we bring you a collection that reflects the latest trends, timeless classics, and everything in between. With a keen eye for quality, we source products from trusted suppliers to ensure you receive nothing but the best.


Customer-Centric Approach:
At the heart of React E-commerce is a commitment to customer satisfaction. Our dedicated customer support team is ready to assist you at every step, from product inquiries to order tracking and beyond. We value your feedback and continuously work towards enhancing your shopping experience.

Secure and Convenient Shopping:
Shop with confidence, knowing that your privacy and security are our top priorities. Our secure payment gateways and encrypted transactions ensure that your personal information remains protected. With user-friendly navigation and a responsive website design, we make sure that your online shopping experience is smooth, convenient, and enjoyable.

Stay Connected:
Join our community of savvy shoppers and stay updated on the latest trends, exclusive offers, and exciting promotions. Follow us on social media, subscribe to our newsletter, and be the first to know about the hottest deals and new arrivals.


        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage