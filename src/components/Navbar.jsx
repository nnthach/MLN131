import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-text">MLN131 Chương 2</span>
        </div>
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            Trang chủ
          </Link>
          <Link to="/chapter2" className="nav-link">
            Phần 2
          </Link>
          <Link to="/chapter3" className="nav-link">
            Phần 3
          </Link>
          <Link to="/exercise" className="nav-link">
            Luyện tập
          </Link>
        </div>
      </nav>
    </header>
  );
}
