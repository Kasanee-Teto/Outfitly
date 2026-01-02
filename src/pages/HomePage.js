import React from 'react';

function HomePage() {
  return (
    <>
      <section className="hero hero-fashion">
        <div className="hero-content container">
          <h2>Express Your Unique Style</h2>
          <p>Discover curated fashion from Goth to Vintage, Cosplay to Streetwear</p>
          <a href="#" className="btn btn-outfitly">
            Explore Collections
          </a>
        </div>
      </section>

      <main className="container outfitly-main">
        <section className="categories">
          <h3>Featured Categories</h3>
          <div className="flex-row">
            <div className="box category-card">
              <img
                src="../assets/images/gothic.jpg"
                alt="Gothic Fashion - Dark elegant clothing and accessories"
              />
              <h4>Goth</h4>
            </div>
            <div className="box category-card">
              <img
                src="../assets/images/cosplay.jpg"
                alt="Cosplay Outfits - Anime and character costumes"
              />
              <h4>Cosplay</h4>
            </div>
            <div className="box category-card">
              <img
                src="../assets/images/vintage.jpg"
                alt="Vintage Fashion - Retro and classic styles"
              />
              <h4>Vintage</h4>
            </div>
            <div className="box category-card">
              <img
                src="../assets/images/streetwear.jpg"
                alt="Streetwear - Urban and contemporary fashion"
              />
              <h4>Streetwear</h4>
            </div>
          </div>
        </section>

        <section className="trending">
          <h3>Trending Products</h3>
          <div className="flex-row">
            <div className="card product-card">
              <img
                src="../assets/images/gothic_dress.jpg"
                alt="Elegant black gothic dress with lace details"
              />
              <div className="card-body">
                <h4>Gothic Dress</h4>
                <p className="price">$149</p>
              </div>
            </div>
            <div className="card product-card">
              <img
                src="../assets/images/costume1.jpg"
                alt="Detailed cosplay outfit with accessories"
              />
              <div className="card-body">
                <h4>Synth V Kasane Teto costume</h4>
                <p className="price">$199</p>
              </div>
            </div>
            <div className="card product-card">
              <img
                src="../assets/images/costume2.jpg"
                alt="Kasane Teto Mesmerizer Costume"
              />
              <div className="card-body">
                <h4>Kasane Teto Mesmerizer Costume</h4>
                <p className="price">$89</p>
              </div>
            </div>
            <div className="card product-card">
              <img
                src="../assets/images/boots.jpg"
                alt="Stylish Synth V Kasane Teto Boots"
              />
              <div className="card-body">
                <h4>Synth V Kasane Teto Boots</h4>
                <p className="price">$129</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;