import React from 'react';
import {Link} from "react-router-dom";
import "./navigation.css"



const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={"/"} className="nav-link" href="#">İlgili Kişiler</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/arama"} className="nav-link" href="#">Aramalar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/ziyaret"} className="nav-link" href="#">Ziyaretler</Link>
                    </li>
                    <li className="nav-item">
                         <Link to={"/urun"} className="nav-link" href="#">Ürünler</Link>
                     </li>
                    <li className="nav-item">
                        <Link to={"/siparis"} className="nav-link " href="#">Siparişler</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/bakim"} className="nav-link " href="#">Bakım Ajandası</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/cari"} className="nav-link " href="#">Cari</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/fatura"} className="nav-link " href="#">Fatura Bilgisi</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/ayricalik"} className="nav-link " href="#">Ayrıcalıklar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
