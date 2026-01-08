import React from "react";
import { Link } from "react-router-dom";
import "./Chapter3.css";

export default function Chapter3() {
  return (
    <div className="chapter3-wrap">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">
            Phần 3: Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân Việt Nam
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-chapter">
        <div className="content-container">
          <h2>Lịch Sử Hình Thành và Phát Triển</h2>
          <p>
            Giai cấp công nhân Việt Nam có lịch sử hình thành và phát triển gắn
            liền với sự kháng cự chống lại áp bức thực dân Pháp. Từ những ngày
            đầu tiên, công nhân Việt Nam đã cho thấy tinh thần đấu tranh cao
            cường, sẵn sàng hy sinh cho độc lập dân tộc.
          </p>

          <h3>Vai Trò trong Các Cuộc Đấu Tranh Lịch Sử</h3>
          <ul>
            <li>
              <strong>Cuộc kháng chiến chống Pháp (1945-1954):</strong> Giai cấp
              công nhân là một trong những lực lượng chủ chốt, cung cấp lao động
              và tài nguyên cho cuộc kháng chiến
            </li>
            <li>
              <strong>Chiến tranh chống Mỹ (1954-1975):</strong> Công nhân Việt
              Nam với tinh thần yêu nước sâu sắc, sẵn sàng chịu đựng khó khăn
              cho tổ quốc
            </li>
            <li>
              <strong>Xây dựng kinh tế thời kỳ chiến tranh:</strong> Công nhân
              là những người tiên phong trong công cuộc xây dựng và phát triển
              kinh tế
            </li>
          </ul>

          <h2 style={{ marginTop: "2.5rem" }}>Sứ Mệnh Hiện Nay</h2>
          <p>
            Trong bối cảnh hội nhập quốc tế, giai cấp công nhân Việt Nam tiếp
            tục thực hiện sứ mệnh lịch sử của mình với những nội dung mới:
          </p>

          <h3>Đóng Góp cho Phát Triển Kinh Tế - Xã Hội</h3>
          <ul>
            <li>
              <strong>Phát triển công nghiệp:</strong> Công nhân là lực lượng
              chủ yếu trong các nhà máy, xí nghiệp hiện đại
            </li>
            <li>
              <strong>Cải thiện kỹ năng:</strong> Không ngừng nâng cao trình độ
              kỹ năng để đáp ứng yêu cầu của thời đại
            </li>
            <li>
              <strong>Xây dựng kỷ luật lao động:</strong> Chấp hành pháp luật
              lao động, tham gia vào quản lý sản xuất
            </li>
          </ul>

          <h3>Duy Trì và Phát Triển Đoàn Kết</h3>
          <p>
            Giai cấp công nhân Việt Nam tiếp tục duy trì truyền thống đoàn kết,
            phối hợp hành động dưới sự lãnh đạo của Đảng Cộng sản Việt Nam để
            xây dựng một Việt Nam phồn vinh, hạnh phúc.
          </p>

          <div className="highlight-box">
            <h3>💡 Nhận Thức Quan Trọng</h3>
            <p>
              Sứ mệnh lịch sử của giai cấp công nhân không phải chỉ dừng lại ở
              việc chiến đấu vì lợi ích kinh tế của riêng mình, mà là góp phần
              vào sự phát triển bền vững của đất nước và hạnh phúc của cả xã
              hội.
            </p>
          </div>

          <div className="navigation-buttons">
            <Link to="/chapter2" className="nav-btn home-btn">
              ← Phần Trước
            </Link>
            <Link to="/exercise" className="nav-btn next-btn">
              Bài Tập & Luyện Tập →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
