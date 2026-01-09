import React from 'react';
import './styles/FAQPage.css';

function FAQPage() {
  return (
    <main className="faq container faq-page">
      <section className="hero">
        <h2>Frequently Asked Questions</h2>
        <p className="lead">
          Find quick answers about shipping, returns, sizing, payment, and more. If you
          need extra help, use the Contact page.
        </p>
      </section>

      <section className="faq-grid">
        <section className="faq-main">
          <details className="faq-item">
            <summary>How long does shipping take?</summary>
            <div className="faq-body">
              <p>
                Domestic orders typically arrive in 3–7 business days. International
                shipping varies by destination (usually 7–21 business days). Tracking is
                emailed once your order ships.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Can I return an item?</summary>
            <div className="faq-body">
              <p>
                Yes — returns accepted within 14 days of delivery for unworn items with
                original tags. Some items are final sale; check the product page for
                details.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Do you ship internationally?</summary>
            <div className="faq-body">
              <p>
                Yes. Shipping costs, delivery times, taxes, and customs duties vary by
                country and are the recipient&apos;s responsibility unless specified
                otherwise.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>What is your sizing policy?</summary>
            <div className="faq-body">
              <p>
                Each product page includes a size guide with measurements. If you&apos;re
                unsure, check reviews for fit notes or contact support for help choosing a
                size.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>How can I track my order?</summary>
            <div className="faq-body">
              <p>
                You&apos;ll receive a tracking link via email after shipment. You can also
                view order status on your account page under &quot;Orders&quot;.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Do you offer gift wrapping or notes?</summary>
            <div className="faq-body">
              <p>
                Gift wrap and personal notes are available at checkout for select items.
                You can ship directly to a recipient with a gift receipt if desired.
              </p>
            </div>
          </details>
        </section>

        <aside className="faq-side">
          <div className="side-card">
            <h3>Need help now?</h3>
            <p>Email our support team for order-specific questions.</p>
            <p>
              <strong>Email:</strong> support@Outfitly.com
            </p>
            <a className="cta" href="/contact">
              Contact Support
            </a>
          </div>

          <div className="side-card">
            <h3>Popular policies</h3>
            <ul>
              <li>
                <a href="#">Shipping &amp; Delivery</a>
              </li>
              <li>
                <a href="#">Returns &amp; Exchanges</a>
              </li>
              <li>
                <a href="#">Payment &amp; Security</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
            </ul>
          </div>

          <div className="side-card newsletter">
            <h3>Join our newsletter</h3>
            <p>Get 10% off your first order and early access to new drops.</p>
            <form action="#" method="post" className="newsletter-form">
              <label className="visually-hidden" htmlFor="nl-email">
                Email address
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </section>

      <section className="helpful">
        <h3>Still have a question?</h3>
        <p>
          Visit our Help Center or reach out — we&apos;re happy to assist with styling,
          sizing, and order help.
        </p>
        <div className="quick-links">
          <a href="/about">About our brand</a>
          <a href="/contact">Contact Us</a>
          <a href="#">Style Guides</a>
        </div>
      </section>
    </main>
  );
}

export default FAQPage;