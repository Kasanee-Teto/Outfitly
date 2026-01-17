import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const masuk = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Email dan Password wajib diisi");
        } else if (!email.includes("@")) {
            alert("Email harus mengandung @");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="judul-brand">Outfitly</div>
            <div className="login-card">
                <form onSubmit={masuk}>
                    <table>
                        <tbody>
                            <tr><td><label className="blue-label">Email</label></td></tr>
                            <tr><td className="input-line"><input type="text" onChange={(e) => setEmail(e.target.value)} /></td></tr>
                            <tr><td><label className="blue-label">Password</label></td></tr>
                            <tr><td className="input-line"><input type="password" onChange={(e) => setPassword(e.target.value)} /></td></tr>
                            <tr><td><button type="submit" className="btn-masuk">Masuk</button></td></tr>
                            <tr>
                                <td className="footer-text">
                                    Belum punya akun? <Link to="/signup" className="bold-link">Daftar disini</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};
export default Login;