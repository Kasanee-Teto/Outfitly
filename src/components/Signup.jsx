import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Signup.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const handleDaftar = (e) => {
        e.preventDefault();

        if (email === "" && pass === "" && confirm === "") {
            alert("Email, Password, dan Confirm Password harus diisi!");
            return;
        }

        if (email === "") {
            alert("Email harus diisi!");
            return;
        } else if (!email.includes("@")) {
            alert("Email tidak valid! Harus mengandung karakter '@'");
            return;
        }

        if (pass === "") {
            alert("Password harus diisi!");
            return;
        }

        if (confirm === "") {
            alert("Confirm Password harus diisi!");
            return;
        }

        if (pass !== confirm) {
            alert("Password dan Confirm Password tidak sama! Keduanya harus sama.");
            return;
        }
        
        alert("Pendaftaran Berhasil! Silakan Login.");
        navigate("/login");
    };

    return (
        <div className="signup-wrapper">
            <div className="judul-brand">Outfitly</div>
            <div className="signup-card">
                <form onSubmit={handleDaftar}>
                    <table>
                        <tbody>
                            <tr><td><label className="blue-label">Email</label></td></tr>
                            <tr>
                                <td className="input-line">
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email" />
                                </td>
                            </tr>
                            
                            <tr><td><label className="blue-label">Password</label></td></tr>
                            <tr>
                                <td className="input-line">
                                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Masukkan Password" />
                                </td>
                            </tr>

                            <tr><td><label className="blue-label">Confirm Password</label></td></tr>
                            <tr>
                                <td className="input-line">
                                    <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Ulangi Password" />
                                </td>
                            </tr>

                            <tr><td><button type="submit" className="btn-daftar">Daftar Sekarang</button></td></tr>
                            <tr>
                                <td>
                                    <Link to="/login" className="link-back">Sudah punya akun? Login disini</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Signup;