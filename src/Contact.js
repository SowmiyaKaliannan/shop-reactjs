import React, { useState } from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setFormStatus('Please fill in all the fields.');
    }
  };

  return (
    <div>
      
      <Header />

      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>

        {/* Contact Form Section */}
        <section className="row">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
                {formStatus && <div className="mt-3 text-center text-success">{formStatus}</div>}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3>Find Us</h3>
                <p>Visit our office or get directions using the map below:</p>
               
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.5663408832106!2d78.16096537482484!3d11.219686988957305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcfb5accea083%3A0x1b04eea5333f5daa!2sSDLC%20NAMAKKAL(Skill%20Development%20Learning%20Centre)!5e0!3m2!1sen!2sus!4v1731744773115!5m2!1sen!2sus"
                    title="Google Maps"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        
        <section className="mt-5 text-center">
          <h3>Other Ways to Reach Us</h3>
          <p>If you prefer, you can contact us via email or follow us on social media:</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="mailto:support@company.com" className="btn btn-link">Email Us</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com" className="btn btn-link" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com" className="btn btn-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com" className="btn btn-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
