import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

const User = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const n = document.getElementById("nama");
        const hp = document.getElementById("hp");
        const email = document.getElementById("email");
        const tgl = document.getElementById("tgl");
        const jk = document.getElementById("jk");

        if (n) {
            n.oninput = () => {
                n.value = n.value.replace(/[0-9]/g, "");
            };
        }

        if (hp) {
            hp.onblur = () => {
                const val = hp.value;
                const isStartValid = val.startsWith("0") || val.startsWith("+62");
                const isLengthValid = val.length >= 10 && val.length <= 13;
                if (val !== "" && (!isStartValid || !isLengthValid)) {
                    alert("Nomor HP tidak valid! Harus 10-13 digit dan diawali '0' atau '+62'");
                }
            };
        }

        if (email) {
            email.onblur = () => {
                if (email.value !== "" && !email.value.includes("@")) {
                    alert("Email tidak valid! Harus mengandung karakter '@'");
                }
            };
        }

        if (tgl) {
            tgl.onblur = () => {
                const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
                if (tgl.value !== "" && !pattern.test(tgl.value)) {
                    alert("Format Tanggal salah! Gunakan format dd/mm/yyyy");
                }
            };
        }

        if (jk) {
            jk.onblur = () => {
                const val = jk.value.toLowerCase();
                if (val !== "" && val !== "laki-laki" && val !== "perempuan") {
                    alert("Jenis Kelamin hanya boleh: 'Laki-laki' atau 'Perempuan'");
                }
            };
        }
    }, []);

    const handleMenuClick = (path) => {
        const n = document.getElementById("nama").value;
        const hp = document.getElementById("hp").value;
        const email = document.getElementById("email").value;
        const tgl = document.getElementById("tgl").value;
        const jk = document.getElementById("jk").value;

        if (n === "" || hp === "" || email === "" || tgl === "" || jk === "") {
            alert("Harus selesai input semua data profil dulu!");
        } else {
            if (path) {
                navigate(path);
            }
        }
    };

    return (
        <div className="user-bg">
            <div className="profile-box">
                <h1 className="title-black">Profil</h1>
                <table className="user-table">
                    <tbody>
                        <tr>
                            <td>Nama Lengkap</td>
                            <td><input type="text" id="nama" placeholder="Hanya huruf" /></td>
                        </tr>
                        <tr>
                            <td>Nomor HP</td>
                            <td><input type="text" id="hp" placeholder="08xxx atau +62xxx" /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" id="email" placeholder="contoh@mail.com" /></td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td><input type="text" id="tgl" placeholder="dd/mm/yyyy" /></td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td><input type="text" id="jk" placeholder="Laki-laki / Perempuan" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="title-blue">Pengaturan</h2>
            
            <div className="menu-item" onClick={() => handleMenuClick("/changepassword")}>
                <span>Ganti Kata Sandi</span>
                <span>&gt;</span>
            </div>
            
            <div className="menu-item" onClick={() => handleMenuClick(null)}>
                <span>Bahasa</span>
                <span>&gt;</span>
            </div>
            
            <div className="menu-item" onClick={() => handleMenuClick(null)}>
                <span>Negara atau Wilayah</span>
                <span>&gt;</span>
            </div>
        </div>
    );
};

export default User;