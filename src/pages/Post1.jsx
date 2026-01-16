import React from "react";
import { NavLink } from "react-router-dom";

function Post1() {
    return (
        <div>
            {/* Header */}
            <section className="bg-white py-5 mb-5 shadow-sm">
                <div className="container">
                    <NavLink to="/blog" className="text-primary fw-semibold d-inline-flex align-items-center mb-3 text-decoration-none">
                        <i className="bi bi-arrow-left me-2">Kembali ke Blog</i>
                    </NavLink>
                    <span className="badge bg-primary mb-2">Tren</span>
                    <h1 className="display-5 fw-bold text-center">5 Tren Fashion Musim Panas 2025 yang Wajib Kamu Coba</h1>
                </div>
            </section>

            {/* Content */}
            <section className="container">
                <div className="row justify-content-center">
                    <div className="row justify-content-center">
                        {/* Image */}
                        <div className="col-lg-8">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1170&q=80"
                                    alt="Tren Fashion Musim Panas"
                                    className="img-fluid rounded mb-4"
                                />
                            </div>
                            {/* Article */}
                            <div className="bg-white p-4 rounded shadow-sm">
                                <p class="lead">Musim panas 2025 membawa angin segar dalam dunia fashion dengan berbagai tren
                                    yang menarik dan penuh warna. Dari pakaian yang nyaman hingga aksesori yang eye-catching,
                                    berikut adalah 5 tren fashion musim panas yang wajib kamu coba untuk tampil stylish
                                    sepanjang musim.</p>

                                <div className="mb-4">
                                    <h2 className="text-primary mt-4 mb-3">1. Warna Pastel yang Menenangkan</h2>
                                    <p>Tahun ini, warna pastel kembali menjadi primadona. Biru langit, pink blush, mint green, dan
                                        lavender adalah beberapa warna yang mendominasi koleksi musim panas. Warna-warna ini tidak
                                        hanya memberikan kesan segar tetapi juga cocok dipadukan dengan berbagai item fashion
                                        lainnya.</p>
                                    <p>Tips styling: Padukan atasan pastel dengan celana putih atau krem untuk tampilan yang clean
                                        dan sophisticated. Jangan ragu untuk mencoba monochromatic look dengan berbagai nuansa
                                        pastel yang serupa.</p>
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-primary mt-4 mb-3">2. Linen - Material Andalan Musim Panas</h2>
                                    <p>Linen menjadi material pilihan untuk musim panas berkat kemampuannya yang menyerap keringat
                                        dan memberikan sirkulasi udara yang baik. Tidak hanya nyaman, pakaian dari linen juga
                                        memberikan kesan elegan dan casual sekaligus.</p>
                                    <p>Tips styling: Pilih setelan linen dengan potongan yang sedikit oversized untuk kenyamanan
                                        maksimal. Tambahkan aksesori seperti ikat pinggang kulit untuk memberikan definisi pada
                                        siluet.</p>
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-primary mt-4 mb-3">3. Cutout Details yang Playful</h2>
                                    <p>Detail cutout atau potongan strategis pada pakaian menjadi tren yang menarik perhatian. Dari
                                        potongan kecil di bahu hingga desain yang lebih berani di bagian punggung, detail ini
                                        menambah dimensi dan daya tarik pada outfit musim panasmu.</p>
                                    <p>Tips styling: Jika baru mencoba tren ini, mulailah dengan potongan kecil di bagian bahu atau
                                        punggung. Padukan dengan item yang sederhana untuk menyeimbangkan tampilan.</p>
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-primary mt-4 mb-3">4. Maxi Dress dengan Print Floral</h2>
                                    <p>Maxi dress dengan print floral besar-besaran menjadi pilihan sempurna untuk berbagai acara
                                        musim panas. Dari piknik di taman hingga pesta kebun, gaun ini memberikan kenyamanan
                                        sekaligus gaya yang memukau.</p>
                                    <p>Tips styling: Pilih maxi dress dengan bahan yang flowy untuk pergerakan yang lebih leluasa.
                                        Lengkapi dengan sandal wedges atau flat sandal untuk tampilan yang sempurna.</p>
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-primary mt-4 mb-3">5. Accessories Statement yang Berani</h2>
                                    <p>Aksesori berukuran besar dan berani menjadi penentu gaya musim panas ini. Dari anting chunky,
                                        kalung statement, hingga gelang yang eye-catching, aksesori ini dapat mengubah outfit
                                        sederhana menjadi tampilan yang memorable.</p>
                                    <p>Tips styling: Fokus pada satu aksesori statement per outfit untuk menghindari tampilan yang
                                        berlebihan. Jika memilih anting besar, pertimbangkan untuk tidak memakai kalung yang terlalu
                                        mencolok.</p>
                                </div>

                                <div className="bg-light mt-5 p-4 rounded">
                                    <h3 className="fw-semibold h5">Kesimpulan</h3>
                                    <p>Musim panas 2025 menawarkan berbagai pilihan tren fashion yang menarik untuk
                                        dieksplorasi. Kunci utamanya adalah memilih tren yang sesuai dengan gaya pribadi dan
                                        kenyamanan. Jangan takut untuk bereksperimen dengan warna, tekstur, dan siluet baru
                                        untuk menemukan tampilan musim panas yang paling mewakili diri Anda.</p>
                                </div>
                                {/* Author */}
                                <div className="d-flex align-items-center border-top pt-4 mt-4">
                                    <div className="rounded-circle me-3 overflow-hidden" style={{ width: "60px", height: "60px" }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80"
                                            alt="Penulis"
                                            className="w-100 h-100"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Sarah Wibaa</h6>
                                        <p className="mb-0 text-muted small">
                                            Fashion Editor dengan pengalaman 8 tahun di industri fashion. Spesialisasi dalam tren
                                    musiman dan styling personal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Related Posts */}
                            <div className="mt-5">
                                <h3 className="mb-4">Artikel Terkait</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <img
                                                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=688&q=80"
                                                className="card-img-top rounded"
                                                alt="Mix and Match Outfit"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title h6 fw-bold">Cara Mix and Match Outfit untuk Tampil Stylish</h5>
                                                <NavLink to="/post/2" className="btn btn-sm btn-outline-primary">Baca Artikel</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <img
                                                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1170&q=80"
                                                className="card-img-top rounded"
                                                alt="Wardrobe Essentials"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title h6 fw-bold">Mengenal Sustainable Fashion dan Dampaknya</h5>
                                                <NavLink to="/post/3" className="btn btn-sm btn-outline-primary">Baca Artikel</NavLink>
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

export default Post1;
