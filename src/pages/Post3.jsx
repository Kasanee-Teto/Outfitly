import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLeaf, faRecycle, faWater, faSpa } from '@fortawesome/free-solid-svg-icons';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>


function Post3() {
    return (
        <div>
            {/* Header */}
            <section className="bg-white py-5 mb-5 shadow-sm">
                <div className="container">
                    <NavLink to="/blog" className="text-primary fw-semibold d-inline-flex align-items-center mb-3 text-decoration-none">
                        <i className="bi bi-arrow-left me-2">Kembali ke Blog</i> 
                    </NavLink>
                    <span className="badge bg-primary mb-2">Lifestyle</span>
                    <h1 className="display-5 fw-bold text-center">Mengenal Sustainable Fashion dan Dampaknya untuk Lingkungan</h1>
                </div>
            </section>
            {/* Content */}
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Image */}
                            <div className="rounded overflow-hidden mb-4" style={{ height: "400px" }}>
                                <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sustainable Fashion" className="w-100 h-100" style={{ objectFit: "cover" }}/>
                            </div>
                            {/* Article */}
                            <div className="bg-white p-4 rounded shadow-sm">
                                <p className="lead">Sustainable fashion bukan sekadar tren, melainkan gerakan global yang bertujuan menciptakan industri fashion yang lebih bertanggung jawab terhadap lingkungan dan sosial. Mari kita eksplorasi bagaimana pilihan fashion kita dapat membuat perbedaan bagi bumi.</p>

                                <div style={{backgroundColor: "#0072ff", color: "white", textAlign: "center", margin: "20px 0", padding: "25px", borderRadius: "10px"}}>
                                    <div className="stat-number" style={{fontSize: "2.5rem", fontWeight: "700", marginBottom: "5px"}}>92 Juta Ton</div>
                                    <div className="stat-label" style={{fontSize: "1rem", opacity: "0.9"}}>Limbah tekstil yang dihasilkan setiap tahunnya</div>
                                </div>

                                <h2 className="text-primary">Apa Itu Sustainable Fashion?</h2>
                                <p>Sustainable fashion adalah pendekatan holistik dalam industri fashion yang mempertimbangkan seluruh siklus hidup produk - dari desain, material, produksi, hingga akhir masa pakai. Konsep ini berfokus pada tiga pilar utama: lingkungan, sosial, dan ekonomi.</p>

                                <h3>Prinsip Dasar Sustainable Fashion</h3>
                                <ul>
                                    <li><strong>Penggunaan material ramah lingkungan</strong> - Memilih bahan organik, daur ulang, atau biodegradable</li>
                                    <li><strong>Proses produksi beretika</strong> - Menjamin kondisi kerja yang layak bagi pekerja</li>
                                    <li><strong>Kualitas dan daya tahan</strong> - Menciptakan produk yang awet dan timeless</li>
                                    <li><strong>Sirkularitas</strong> - Memastikan produk dapat didaur ulang atau digunakan kembali</li>
                                </ul>

                                <h2 className="text-primary">Dampak Fashion terhadap Lingkungan</h2>

                                <h3>1. Konsumsi Air yang Masif</h3>
                                <p>Industri fashion adalah konsumen air terbesar kedua di dunia. Produksi satu kaus katun membutuhkan sekitar 2,700 liter air - setara dengan kebutuhan minum satu orang selama 2.5 tahun!</p>

                                <h3>2. Polusi Kimia</h3>
                                <p>Pewarnaan tekstil menyumbang 20% polusi air bersih global. Bahan kimia beracun dari proses finishing mencemari sungai dan ekosistem perairan.</p>

                                <h3>3. Emisi Karbon</h3>
                                <p>Industri fashion menghasilkan 10% dari total emisi karbon global - lebih banyak daripada penerbangan internasional dan pengiriman laut digabungkan.</p>

                                <div className="eco-tip" style={{backgroundColor: "#f7f7f7", borderLeft: "4px solid #0072ff", padding: "20px", margin: "25px 0", borderRadius: "0 8px 8px 0"}}>
                                    <h4>Fakta Menarik</h4>
                                    <p>Mengenakan pakaian selama 9 bulan lebih lama dapat mengurangi jejak karbon hingga 30%. Kualitas lebih penting daripada kuantitas!</p>
                                </div>

                                <h2 className="text-primary">Material Ramah Lingkungan</h2>

                                <div className="material-grid" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", margin: "25px 0"}}>
                                    <div className="material-item shadow-sm" style={{backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", textAlign: "center"}}>
                                        <div className="material-icon" style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}} >
                                            <FontAwesomeIcon icon={faLeaf} style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}}/>
                                        </div>
                                        <h5>Organic Cotton</h5>
                                        <p>Mengurangi penggunaan pestisida hingga 91% dibanding katun konvensional</p>
                                    </div>
                                    <div className="material-item bg-white shadow-sm" style={{backgroundColor: "#f8f9fa" ,padding: "20px", borderRadius: "8px", textAlign: "center"}}>
                                        <div className="material-icon" style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}}>
                                            <FontAwesomeIcon icon={faRecycle} style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}}/>
                                        </div>
                                        <h5>Recycled Polyester</h5>
                                        <p>Mengurangi emisi karbon hingga 32% dibanding polyester baru</p>
                                    </div>
                                    <div className="material-item shadow-sm" style={{backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", textAlign: "center"}}>
                                        <div className="material-icon" style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}}>
                                            <FontAwesomeIcon icon={faWater} style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}}/>
                                        </div>
                                        <h5>Tencel/Lyocell</h5>
                                        <p>Terbuat dari kayu berkelanjutan dengan sistem daur ulang air 99%</p>
                                    </div>
                                    <div className="material-item shadow-sm" style={{backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", textAlign: "center"}}>
                                        <div className="material-icon" >
                                            <FontAwesomeIcon icon={faSpa} style={{fontSize: "2rem", color: "0072ff", marginBottom: "10px"}} />
                                            <i className="bi bi-flower1"></i>
                                        </div>
                                        <h5>Hemp</h5>
                                        <p>Tumbuh tanpa pestisida dan menghasilkan serat yang sangat kuat</p>
                                    </div>
                                </div>

                                <h2 className="text-primary">Cara Berkontribusi dalam Sustainable Fashion</h2>

                                <h3>1. Jadilah Konsumen yang Cerdas</h3>
                                <ul>
                                    <li>Belilah barang berkualitas yang tahan lama</li>
                                    <li>Pilih brand yang transparan tentang proses produksi</li>
                                    <li>Investasi pada item timeless daripada fast fashion</li>
                                </ul>

                                <h3>2. Rawat Pakaian dengan Baik</h3>
                                <ul>
                                    <li>Cuci pakaian dengan air dingin untuk menghemat energi</li>
                                    <li>Jemur alami daripada menggunakan dryer</li>
                                    <li>Perbaiki pakaian yang rusak daripada langsung membuang</li>
                                </ul>

                                <h3>3. Terapkan Prinsip Sirkular</h3>
                                <ul>
                                    <li>Donasikan pakaian yang tidak terpakai</li>
                                    <li>Jual atau tukar pakaian melalui platform secondhand</li>
                                    <li>Upcycle pakaian lama menjadi item baru</li>
                                </ul>

                                <div className="eco-tip" style={{backgroundColor: "#f7f7f7", borderLeft: "4px solid #0072ff", padding: "20px", margin: "25px 0", borderRadius: "0 8px 8px 0"}}>
                                    <h4>Challenge 30 Hari</h4>
                                    <p>Coba "30-day wear challenge" - selama sebulan, tidak membeli pakaian baru dan hanya menggunakan yang sudah dimiliki. Kamu akan belajar menghargai setiap item di lemari!</p>
                                </div>

                                <h2 className="text-primary">Brand Sustainable Fashion Indonesia</h2>
                                <p>Berikut beberapa brand lokal yang sudah menerapkan prinsip sustainable fashion:</p>

                                <h3>1. Sejauh Mata Memandang</h3>
                                <p>Menggunakan material natural dan ramah lingkungan dengan proses produksi yang transparan.</p>

                                <h3>2. Bateeq</h3>
                                <p>Brand batik yang menggunakan pewarna alami dan mendukung pengrajin lokal.</p>

                                <h3>3. Brodo</h3>
                                <p>Sepatu kulit dengan proses produksi beretika dan material berkualitas.</p>

                                <h3>4. Byo Living</h3>
                                <p>Fokus pada produk daur ulang dan kemasan ramah lingkungan.</p>

                                <h2 className="text-primary">Masa Depan Sustainable Fashion</h2>
                                <p>Industri fashion sedang mengalami transformasi besar-besaran menuju keberlanjutan. Inovasi teknologi seperti material bio-based, dyeing tanpa air, dan AI untuk optimasi produksi akan membentuk masa depan fashion yang lebih hijau.</p>

                                <div style={{backgroundColor: "#0072ff", color: "white", textAlign: "center", margin: "20px 0", padding: "25px", borderRadius: "10px"}}>
                                    <div className="stat-number">42%</div>
                                    <div className="stat-label">Konsumen millennials bersedia membayar lebih untuk produk sustainable</div>
                                </div>

                                <div className="mt-5 p-4 bg-light rounded">
                                    <h3 className="h5">Kesimpulan</h3>
                                    <p>Sustainable fashion bukan tentang kesempurnaan, melainkan progres. Setiap langkah kecil - dari memilih material yang lebih baik hingga merawat pakaian lebih lama - memberikan dampak positif. Sebagai konsumen, kita memiliki kekuatan untuk mendorong perubahan melalui pilihan belanja kita. Mari menjadi bagian dari solusi!</p>
                                </div>
                                {/* Author */}
                                <div className="d-flex align-items-center border-top pt-4 mt-4">
                                    <div className="me-3 rounded-circle overflow-hidden" style={{ width:  "60px", height: "60px"}}>
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Penulis" className="w-100 h-100" style={{objectFit: "cover"}}/>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Diana Sari</h6>
                                        <p className="mb-0 text-muted small">Environmental Activist dan Sustainable Fashion Consultant. Founder komunitas "Fashion for Future" yang mengedukasi tentang fashion berkelanjutan.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Related Posts */}
                            <div className="mt-5">
                                <h3 className="mb-4">Artikel Terkait</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="Tren Fashion Musim Panas" style={{height: "200px", objectFit: "cover"}}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">5 Tren Fashion Musim Panas 2025 yang Wajib Kamu Coba</h5>
                                                    <NavLink to="/post/1" className="btn btn-sm btn-outline-primary">Baca Artikel</NavLink>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <img alt="related-article-2" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Cara Mix and Match Outfit untuk Tampil Stylish Setiap
                                                        Hari</h5>
                                                    <NavLink to="/post/2" className="btn btn-sm btn-outline-primary">Baca Artikel</NavLink>
                                                </div>
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
export default Post3;