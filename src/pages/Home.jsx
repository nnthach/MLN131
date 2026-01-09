import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrap">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Chủ Nghĩa Xã Hội Khoa Học</h1>
          <p className="banner-subtitle">
            Chương 2: Sứ mệnh lịch sử của giai cấp công nhân
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <Link to="/chapter2" className="card">
            <div className="card-icon">👷‍♂️</div>
            <h3>Giai Cấp Công Nhân</h3>
            <p>Vai trò và sứ mệnh lịch sử của giai cấp công nhân</p>
          </Link>

          <Link to="/chapter3" className="card">
            <div className="card-icon">🌾</div>
            <h3>Sứ Mệnh Lịch Sử</h3>
            <p>Sứ mệnh lịch sử của giai cấp công nhân Việt Nam</p>
          </Link>

          <Link to="/exercise" className="card">
            <div className="card-icon">📚</div>
            <h3>Bài Tập Luyện Tập</h3>
            <p>Ôn tập và kiểm tra kiến thức</p>
          </Link>
        </div>
      </section>

      {/* Section 2: Working Class */}
      <section className="content-section section-2">
        <div className="section-container">
          <div className="section-content">
            <h2>Giai Cấp Công Nhân và Việc Thực Hiện Sứ Mệnh Lịch Sử</h2>
            <p className="section-subtitle">
              Vai trò của giai cấp công nhân hiện nay trong xã hội
            </p>
            <p className="section-text">
              Giai cấp công nhân là lực lượng tiến bộ nhất trong xã hội hiện
              đại. Họ đóng vai trò then chốt trong việc thực hiện sứ mệnh lịch
              sử của mình - xây dựng một xã hội xã hội chủ nghĩa, không có áp
              bức và bóc lột.
            </p>
            <p className="section-text">
              Sứ mệnh lịch sử của giai cấp công nhân không chỉ dừng lại ở việc
              chiến đấu vì quyền lợi của mình mà là vì sự giải phóng toàn bộ
              loài người, vì một tương lai tốt đẹp hơn cho tất cả mọi người.
            </p>
            <Link to="/chapter2" className="section-btn">
              Tìm Hiểu Thêm →
            </Link>
          </div>
          <div className="section-image">
            <div className="placeholder-image">👷‍♂️</div>
          </div>
        </div>
      </section>

      {/* Section 3: Vietnamese Working Class */}
      <section className="content-section section-3">
        <div className="section-container">
          <div className="section-image">
            <div className="placeholder-image">🌾</div>
          </div>
          <div className="section-content">
            <h2>Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân Việt Nam</h2>
            <p className="section-subtitle">
              Từ cuộc kháng chiến chống Pháp đến xây dựng đất nước
            </p>
            <p className="section-text">
              Giai cấp công nhân Việt Nam có truyền thống đấu tranh huy hoàng.
              Từ những ngày đầu hình thành cho đến nay, họ luôn đứng hàng đầu
              trong các cuộc đấu tranh vì độc lập, tự do và xã hội chủ nghĩa.
            </p>
            <p className="section-text">
              Trong công cuộc xây dựng và bảo vệ Tổ quốc, giai cấp công nhân
              Việt Nam tiếp tục thực hiện sứ mệnh lịch sử của mình - xây dựng
              một nước Việt Nam phồn vinh, vươn lên mạnh.
            </p>
            <Link to="/chapter3" className="section-btn">
              Khám Phá Thêm →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Exercise*/}
      <div className="review-banner">
        <div className="review-banner-inner">
          {/* Left content */}
          <div className="review-info">
            <h2>Ôn Tập Qua Trò Chơi</h2>
            <p className="review-desc">
              Hình thức <strong>trắc nghiệm</strong> kết hợp{" "}
              <strong>truy tìm kết quả</strong>, giúp ghi nhớ kiến thức nhanh và
              hiệu quả hơn.
            </p>
          </div>

          {/* Right button */}
          <Link to="/chapter2" className="review-cta">
            Ôn Tập Ngay
            <span className="cta-icon">🎯</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
