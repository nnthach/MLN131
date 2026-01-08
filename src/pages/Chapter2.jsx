import React from "react";
import { Link } from "react-router-dom";
import "./Chapter2.css";

export default function Chapter2() {
  return (
    <div className="chapter2-wrap">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">
            Phần 2: Giai Cấp Công Nhân và Việc Thực Hiện Sứ Mệnh Lịch Sử Của
            Giai Cấp Công Nhân Hiện Nay
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-chapter">
        <div className="content-container">
          <h2>Giới Thiệu</h2>
          <p>
            Giai cấp công nhân là lực lượng xã hội tiến bộ nhất, có vai trò
            quyết định trong việc thay đổi cấu trúc xã hội và xây dựng một thế
            giới không có áp bức, bóc lột.
          </p>

          <h3>Đặc Điểm Chính</h3>
          <ul>
            <li>
              <strong>Tính tiến bộ:</strong> Giai cấp công nhân đại diện cho xu
              hướng phát triển của xã hội
            </li>
            <li>
              <strong>Tính quốc tế:</strong> Công nhân không có quốc gia, lợi
              ích của họ là lợi ích chung của loài người
            </li>
            <li>
              <strong>Tính tổ chức:</strong> Công nhân có khả năng tổ chức cao,
              thống nhất trong đấu tranh
            </li>
          </ul>

          <h3>Sứ Mệnh Lịch Sử</h3>
          <p>
            Sứ mệnh lịch sử của giai cấp công nhân không phải chỉ lợi ích của
            riêng họ, mà là giải phóng toàn bộ loài người. Họ là những người đi
            tiên phong trong cuộc cách mạng xã hội chủ nghĩa.
          </p>

          <div className="navigation-buttons">
            <Link to="/" className="nav-btn home-btn">
              ← Trang chủ
            </Link>
            <Link to="/chapter3" className="nav-btn next-btn">
              Phần Tiếp Theo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
