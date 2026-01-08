import React from 'react';
import Card from '../components/Cards/Card';

function AboutPage() {
  return (
    <main className="about container">
      <section className="intro">
        <h2>Our Story</h2>
        <p className="lead">
          Founded in 2020, Outfitly curates timeless and conscious fashion from around the
          world. We focus on quality, sustainability, and designs that make you feel
          confident.
        </p>
      </section>

      <section className="mission-vision">
        <Card title="Our Mission" description="To empower people with access to quality clothing while promoting responsible
            production and inclusive sizing."/>
        <Card title="Our Vision" description="To be a trusted brand where style and sustainability meet — accessible to
            many, designed to last."/>
      </section>

      <section className="values">
        <h3>What we stand for</h3>
        <div className="values-grid">
          <div className="value">
            <h4>Sustainability</h4>
            <p>We partner with suppliers who follow better-materials and ethical practices.</p>
          </div>
          <div className="value">
            <h4>Quality</h4>
            <p>Each design is curated for durability and lasting style.</p>
          </div>
          <div className="value">
            <h4>Inclusivity</h4>
            <p>
              We offer a wide size range and clear fit guides to help you find the right
              piece.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h3>Meet the team</h3>
        <p className="sub">A small, dedicated team with a big love for fashion.</p>
        <div className="team-grid">
          <div className="member">
            <img
              src="../assets/images/person1.jpg"
              alt="Sarah Lee — Founder & CEO"
            />
            <p>
              <strong>Sarah Lee</strong>
              <br />
              Founder &amp; CEO
            </p>
          </div>
          <div className="member">
            <img
              src="../assets/images/person2.jpg"
              alt="Michael Tan — Marketing Head"
            />
            <p>
              <strong>Michael Tan</strong>
              <br />
              Marketing Head
            </p>
          </div>
          <div className="member">
            <img
              src="../assets/images/person3.jpg"
              alt="Andre Wubert — Designer"
            />
            <p>
              <strong>Andre Wubert</strong>
              <br />
              Designer
            </p>
          </div>
          <div className="member">
            <img
              src="../assets/images/person4.png"
              alt="Kasane Teto — Customer Experience"
            />
            <p>
              <strong>Kasane Teto</strong>
              <br />
              Customer Experience
            </p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <h3>Our journey</h3>
        <ol>
          <li>
            <strong>2020</strong> — Outfitly launched with a small curated collection.
          </li>
          <li>
            <strong>2021</strong> — Expanded into footwear and accessories.
          </li>
          <li>
            <strong>2023</strong> — Introduced sustainable capsule collections.
          </li>
          <li>
            <strong>2025</strong> — Opened our flagship store in Jakarta.
          </li>
        </ol>
      </section>

      <section className="careers-cta">
        <h3>Careers &amp; collaborations</h3>
        <p>
          We’re always looking for creative minds. Email{' '}
          <a href="mailto:careers@Outfitly.com">careers@Outfitly.com</a> to learn about
          openings and collaborations.
        </p>
        <a className="cta" href="*">
          Join our team
        </a>
      </section>
    </main>
  );
}

export default AboutPage;