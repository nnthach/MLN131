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
          {/*Đặc điểm */}
          <h2>Đặc điểm của giai cấp công nhân Việt Nam</h2>
          <p>
            Giai cấp công nhân Việt Nam ra đời trong quá trình khai thác thuộc
            địa của thực dân Pháp, phát triển trong điều kiện đất nước bị áp bức
            bởi chủ nghĩa thực dân, phong kiến và tư sản. Ngay từ khi hình
            thành, giai cấp công nhân Việt Nam đã gắn bó chặt chẽ với phong trào
            yêu nước và sớm tiếp thu chủ nghĩa Mác – Lênin.
          </p>
          <ul>
            <li>
              Ra đời trước giai cấp tư sản dân tộc, sớm tham gia phong trào cách
              mạng.
            </li>
            <li>
              Chịu áp bức nặng nề nhưng có tinh thần đấu tranh kiên cường.
            </li>
            <li>
              Có mối liên minh tự nhiên với giai cấp nông dân và trí thức.
            </li>
            <li>
              Giữ vai trò lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam.
            </li>
          </ul>

          {/*Nội dung sứ mệnh */}
          <h2>
            Nội dung sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay
          </h2>
          <p>
            Trong bối cảnh đổi mới và hội nhập quốc tế, giai cấp công nhân Việt
            Nam tiếp tục thực hiện sứ mệnh lịch sử của mình trên các lĩnh vực
            kinh tế, chính trị và văn hóa – xã hội.
          </p>

          <h3>Trên lĩnh vực kinh tế</h3>
          <ul>
            <li>Đi đầu trong công nghiệp hóa, hiện đại hóa đất nước.</li>
            <li>
              Là lực lượng chủ yếu trong các ngành sản xuất và dịch vụ hiện đại.
            </li>
            <li>Không ngừng nâng cao trình độ tay nghề và kỷ luật lao động.</li>
          </ul>

          <h3>Trên lĩnh vực chính trị</h3>
          <ul>
            <li>
              Là lực lượng nòng cốt của khối liên minh công – nông – trí thức.
            </li>
            <li>Tham gia xây dựng Nhà nước pháp quyền xã hội chủ nghĩa.</li>
            <li>Củng cố vai trò lãnh đạo của Đảng Cộng sản Việt Nam.</li>
          </ul>

          <h3>Trên lĩnh vực văn hóa – xã hội</h3>
          <ul>
            <li>Xây dựng lối sống văn minh, kỷ luật và trách nhiệm xã hội.</li>
            <li>Góp phần hình thành con người mới xã hội chủ nghĩa.</li>
          </ul>

          {/*Phương hướng và một số giải pháp chủ yếu để xây dựng giai cấp công nhân Việt Nam hiện nay */}
          <h2>
            Phương hướng và một số giải pháp chủ yếu để xây dựng giai cấp công
            nhân Việt Nam hiện nay
          </h2>
          <ul>
            <li>
              Nâng cao trình độ chính trị, ý thức giai cấp và bản lĩnh cách
              mạng.
            </li>
            <li>
              Đẩy mạnh đào tạo, bồi dưỡng tay nghề, đáp ứng yêu cầu công nghiệp
              hóa.
            </li>
            <li>
              Cải thiện đời sống vật chất và tinh thần của giai cấp công nhân.
            </li>
            <li>
              Xây dựng tổ chức công đoàn vững mạnh, bảo vệ quyền lợi người lao
              động.
            </li>
            <li>Củng cố vai trò lãnh đạo của Đảng Cộng sản Việt Nam.</li>
          </ul>

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
            <Link to="/chapter2" className="nav-btn prev-btn">
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
