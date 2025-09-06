import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css'; 

function About() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      <div className="about-page container my-5">
       
        <section className="hero-section text-center mb-5">
          <div className="hero-content">
            <h1>Welcome to <span className="highlight">Our Store</span>!</h1>
            <p className="lead">
              Your one-stop destination for high-quality products, amazing deals, and exceptional service.
            </p>
          </div>
          <img
            src="/images/about.png" 
            alt="About Us"
            className="hero-image img-fluid shadow-sm rounded"
          />
        </section>

    
        <section className="intro-section row align-items-center my-5">
          <div className="col-md-3">
            <img
              src="/images/about us.png" 
              alt="Welcome"
              className="img-fluid shadow-sm rounded"
            />
          </div>
          <div className="col-md-9">
            <h2>About Us</h2>
            <p>
              At <strong>Our Store</strong>, we are passionate about offering high-quality products that enhance everyday life.
              Founded in <strong>[Year]</strong>, we aim to provide our customers with the best products and a seamless shopping experience.
            </p>
            <p>
              Our mission is to combine innovation, quality, and affordability to bring you products you'll love.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section text-center my-5">
          <h2 className="mb-4">What We Offer</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/electronics.png" 
                alt="Electronics"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Electronics</h5>
              <p>Explore the latest gadgets and devices.</p>
            </div>
            <div className="col-md-4">
              <img
                src="/images/apparel.png" 
                alt="Apparel"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Apparel</h5>
              <p>Stylish and comfortable clothing for everyone.</p>
            </div>
            <div className="col-md-4">
              <img
                src="/images/accessories.png" 
                alt="Accessories"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Accessories</h5>
              <p>Essential add-ons to complement your style.</p>
            </div>
          </div>
        </section>

        
        <section className="vision-section bg-light p-5 text-center my-5 rounded shadow-sm">
          <h2>Our Vision</h2>
          <p>
            To be a trusted brand known for delivering excellent products and exceptional customer service. 
            We strive to make shopping a seamless and enjoyable experience for everyone.
          </p>
        </section>

   
        <section className="team-section my-5">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src="/images/member1.png" 
                alt="Team Member"
                className="team-img rounded-circle mb-3"
              />
              <h5>John Doe</h5>
              <p>CEO & Founder</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/images/member2.png"
                alt="Team Member"
                className="team-img rounded-circle mb-3"
              />
              <h5>Jane Smith</h5>
              <p>Marketing Manager</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/images/member3.png"
                alt="Team Member"
                className="team-img rounded-circle mb-3"
              />
              <h5>Bob Johnson</h5>
              <p>Product Development Lead</p>
            </div>
          </div>
        </section>

      
        <section className="testimonials-section my-5">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="card-deck">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>"The quality of the products is outstanding, and the service is amazing!"</p>
                  <footer className="blockquote-footer">Emily Davis</footer>
                </blockquote>
              </div>
            </div>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>"I found everything I needed in one place. Highly recommend this store!"</p>
                  <footer className="blockquote-footer">Mark Thompson</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section bg-dark text-light p-5 text-center rounded shadow-sm">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us via the details below:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:support@company.com" className="text-warning">support@company.com</a></li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default About;
