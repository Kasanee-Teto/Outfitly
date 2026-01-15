import React from "react";
import { NavLink } from "react-router-dom";

function Post2() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white py-5 mb-5 shadow-sm">
        <div className="container">
          <NavLink
            to="/blog"
            className="text-primary fw-semibold d-inline-flex align-items-center mb-3 text-decoration-none"
          >
            <i className="bi bi-arrow-left me-2">Kembali ke Blog</i>
          </NavLink>
          <span className="badge bg-primary mb-2">Tips</span>
          <h1 className="display-5 fw-bold text-center">
            Cara Mix and Match Outfit untuk Tampil Stylish Setiap Hari
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Image */}
            <div className="rounded overflow-hidden mb-4" style={{ height: "400px" }}>
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=688&q=80"
                alt="Mix and Match Outfit"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Article */}
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-primary mt-4 mb-3">Kombinasi Praktis untuk Sehari-hari</h2>
              <h3 className="fw-semibold">Outfit Kantor yang Profesional</h3>
              <ul>
                <li>Kemeja putih dengan blazer navy</li>
                <li>Celana panjang bahan warna netral</li>
                <li>Dapat dipadukan dengan sepatu loafers</li>
              </ul>

              <h3 className="fw-semibold mt-4">Style Kasual yang Nyaman</h3>
              <p>Padu padan untuk aktivitas santai seperti hangout:</p>
              <ul>
                <li>Kaos polos dengan celana jeans</li>
                <li>Sneakers putih sebagai alas kaki</li>
              </ul>

              <h3 className="fw-semibold mt-4">Style Klasik</h3>
              <p>
                Menggabungkan elemen klasik seperti trench coat, dress hitam, dan OOTD berwarna monokrom.
                Style ini cocok untuk tampilan yang polished dan effortless.
              </p>

              <h2 className="text-primary mt-5 mb-3">Mix and Match dengan Aksesoris</h2>
              <p>Aksesoris dapat meningkatkan penampilan dan membuat outfit lebih menarik.</p>

              <h4 className="fw-semibold">Statement Pieces</h4>
              <ul>
                <li>Kalung besar untuk sentuhan glamor</li>
                <li>Tas berwarna cerah untuk aksen</li>
              </ul>

              <h4 className="fw-semibold mt-4">Sepatu yang Tepat</h4>
              <ul>
                <li>Sepatu boots untuk musim dingin</li>
                <li>Sandal untuk musim panas</li>
                <li>Sneakers untuk gaya kasual</li>
              </ul>

              <h2 className="text-primary mt-5 mb-3">Strategi Mix and Match Cerdas</h2>
              <ol>
                <li>
                  <strong>Buat Capsule Wardrobe:</strong> Isi 20–30 item clothing yang bisa dipadupadankan.
                </li>
                <li>
                  <strong>Fotografi Outfit-mu:</strong> Foto outfit yang kamu pakai bisa jadi referensi.
                </li>
                <li>
                  <strong>Rotasi Musiman:</strong> Padu padan outfit berdasarkan musim agar tampil fresh.
                </li>
              </ol>

              <h2 className="text-primary mt-5 mb-3">Kesalahan Umum yang Harus Dihindari</h2>
              <ul>
                <li>Terlalu banyak warna dalam satu outfit</li>
                <li>Tidak memperhatikan proporsi tubuh</li>
                <li>Mengikuti tren tanpa mempertimbangkan kenyamanan</li>
              </ul>

              <div className="bg-light p-4 rounded mt-5">
                <h3 className="h5 fw-semibold">Kesimpulan</h3>
                <p>
                  Mix and match adalah teknik yang bisa membuat penampilan lebih stylish tanpa harus membeli banyak pakaian baru.
                  Dengan strategi yang tepat, kamu bisa tampil fashionable setiap hari.
                </p>
              </div>

              {/* Author */}
              <div className="d-flex align-items-center border-top pt-4 mt-4">
                <div
                  className="me-3 rounded-circle overflow-hidden"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1170&q=80"
                    alt="Penulis"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 className="fw-semibold mb-1">Andi Pratama</h4>
                  <p className="text-muted small mb-0">
                    Personal Stylist dengan pengalaman 6 tahun. Spesialisasi dalam wardrobe styling dan personal branding melalui fashion.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-5">
              <h3 className="mb-4">Artikel Terkait</h3>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1170&q=80"
                      className="card-img-top"
                      alt="Tren Fashion Musim Panas"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        5 Tren Fashion Musim Panas 2025 yang Wajib Kamu Coba
                      </h5>
                      <NavLink to="/post/1" className="btn btn-sm btn-outline-primary">
                        Baca Artikel
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1170&q=80"
                      className="card-img-top"
                      alt="Sustainable Fashion"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Mengenal Sustainable Fashion dan Dampaknya untuk Lingkungan
                      </h5>
                      <NavLink to="/post/3" className="btn btn-sm btn-outline-primary">
                        Baca Artikel
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Post2;
