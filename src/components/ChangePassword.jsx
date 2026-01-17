import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ChangePassword.css';

const ChangePassword = () => {
    const [email, setEmail] = useState("");
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();

        if (email === "" && p1 === "" && p2 === "") {
            alert("Email, Password Baru, dan Konfirmasi Password harus diisi!");
            return;
        }

        if (email === "") {
            alert("Email harus diisi!");
            return;
        } else if (!email.includes("@")) {
            alert("Email tidak valid! Harus mengandung karakter '@'");
            return;
        }

        if (p1 === "") {
            alert("Password Baru harus diisi!");
            return;
        }

        if (p2 === "") {
            alert("Konfirmasi Password harus diisi!");
            return;
        }

        if (p1 !== p2) {
            alert("Konfirmasi password salah! Password baru dan konfirmasi harus sama.");
            return;
        }

        alert("Password Berhasil Diubah!");
        navigate("/");
    };

    return (
        <div className="cp-aqua-bg">
            <div className="pink-card">
                <h1 className="cp-title-blue">Reset Password</h1>
                <form onSubmit={update}>
                    <label className="cp-label">Email :</label>
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="cp-input-field"
                    />
                    
                    <label className="cp-label">Password Baru :</label>
                    <input 
                        type="password" 
                        value={p1}
                        onChange={(e) => setP1(e.target.value)} 
                        className="cp-input-field"
                    />
                    
                    <label className="cp-label">Konfirmasi Password :</label>
                    <input 
                        type="password" 
                        value={p2}
                        onChange={(e) => setP2(e.target.value)} 
                        className="cp-input-field"
                    />
                    
                    <button type="submit" className="cp-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;