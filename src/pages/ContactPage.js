import React from 'react';

function ContactPage() {
  return (
    <main className="contact container">
      <section className="intro">
        <h2>Contact Us</h2>
        <p className="lead">
          We’d love to hear from you—product questions, order help, or styling advice. Use
          the form below or visit our store.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" action="#" method="post" noValidate>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@domain.com"
            required
          />

          <label htmlFor="topic">Topic</label>
          <select id="topic" name="topic">
            <option>Order &amp; Tracking</option>
            <option>Returns &amp; Exchanges</option>
            <option>Product Inquiry</option>
            <option>Collaboration / Press</option>
            <option>Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="How can we help?"
            required
          />

          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>

        <aside className="info">
          <div className="store-card">
            <h3>Visit our store</h3>
            <p>
              <strong>Address:</strong>
              <br />
              Jl. Merdeka No. 10, Medan
            </p>
            <p>
              <strong>Store Hours:</strong>
              <br />
              Mon–Sat: 10:00–20:00
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              +62 812 3456 7890
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              support@Outfitly.com
            </p>
          </div>

          <div className="map">
            <iframe
              title="Outfitly store location"
              src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>

          <div className="social">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Pinterest">
                Pinterest
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="faq-mini">
        <h3>Quick answers</h3>
        <div className="mini-grid">
          <div className="mini-card">
            <h4>Order changes</h4>
            <p>
              Contact us within 1 hour of placing your order to request a change for the
              fastest help.
            </p>
          </div>
          <div className="mini-card">
            <h4>Gift services</h4>
            <p>Gift wrap and personal notes are available at checkout for most products.</p>
          </div>
          <div className="mini-card">
            <h4>Wholesale</h4>
            <p>
              Interested in wholesale? Email wholesale@Outfitly.com for pricing and lead
              times.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;