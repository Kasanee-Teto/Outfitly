import React, {useState} from "react";
import CommentSection from "../components/comment/Comment.jsx";
import ShareButton from "../components/sharelink/ShareLink.jsx";
import BlogList from "../components/SearchPosts/BlogList.jsx";
import SearchPosts from "../components/SearchPosts/SearchPosts.jsx";

function BlogPage() {
    const allPosts = [{ id: 1, category: "Tren", title: "5 Tren Fashion Musim Panas 2025 yang Wajib Kamu Coba", description: "Temukan tren terbaru yang akan membuat penampilanmu semakin stylish...", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1170&q=80" }, { id: 2, category: "Tips", title: "Cara Mix and Match Outfit untuk Tampil Stylish Setiap Hari", description: "Pelajari teknik mix and match yang tepat...", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=688&q=80" }, { id: 3, category: "Lifestyle",title: "Mengenal Sustainable Fashion dan Dampaknya untuk Lingkungan", description: "Ketahui pentingnya sustainable fashion...", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1170&q=80" }];
    const [filteredPosts, setFilteredPosts] = useState(allPosts);
    const blogUrl = `${window.location.origin}/blog`;
    return (
        <div className="blog-page">
            {/* Blog Section */}
            <section className="container text-center mb-5">
                <div className="container text-center mb-5 position-relative d-inline-block">
                    <h1 className="fw-bold fs-1 text-primary mb-4">Blog Fashion &amp; Gaya</h1>
                    <SearchPosts posts={allPosts} onFilter={setFilteredPosts} />
                    <div className="w-100 border-bottom border-primary border-3"></div>
                    <BlogList posts={filteredPosts} />
                    <div className="row g-4 justify-content-center mt-4">
                        
                    </div>
                </div>
            </section>

            {/* Policy Section */}
            <section className="policy-section py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="p-3 rounded shadow-sm h-100" style={{ backgroundColor: "white" }}>
                                <h3 className="text-primary fs-6 fw-semibold mb-3">Kebijakan Pengiriman</h3>
                                <ul className="list-unstyled text-muted small mb-0">
                                    <li>Gratis ongkir untuk pembelian di atas Rp 500.000</li>
                                    <li>Pengiriman 1-3 hari kerja</li>
                                    <li>Tracking order tersedia</li>
                                    <li>Pengembalian dalam 30 hari</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="bg-white p-3 rounded shadow-sm h-100">
                                <h3 className="text-primary fs-6 fw-semibold mb-3">Kebijakan Pembayaran</h3>
                                <ul className="list-unstyled text-muted small mb-0">
                                    <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                                    <li>Kartu Kredit (Visa, Mastercard)</li>
                                    <li>E-Wallet (OVO, Gopay, Dana)</li>
                                    <li>COD untuk area tertentu</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="bg-white p-3 rounded shadow-sm h-100">
                                <h3 className="text-primary fs-6 fw-semibold mb-3">Kebijakan Privasi</h3>
                                <ul className="list-unstyled text-muted small mb-0">
                                    <li>Data pribadi dilindungi</li>
                                    <li>Tidak membagikan data ke pihak ketiga</li>
                                    <li>Opsi unsubscribe newsletter</li>
                                    <li>Hak akses dan penghapusan data</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="bg-white p-3 rounded shadow-sm h-100">
                                <h3 className="text-primary fs-6 fw-semibold mb-3">Layanan Pelanggan</h3>
                                <ul className="list-unstyled text-muted small mb-0">
                                    <li>Buka Senin - Minggu, 09.00 - 21.00 WIB</li>
                                    <li>Email: cs@Outfitly.com</li>
                                    <li>WhatsApp: 0812-3456-7890</li>
                                    <li>Live chat 24/7</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="card">
                <CommentSection />
            </div>
            <div className="">
                <ShareButton url={blogUrl} text="Cek blog fashion & gaya terbaru di sini!" />
            </div>

        </div>
    );
}

export default BlogPage;
