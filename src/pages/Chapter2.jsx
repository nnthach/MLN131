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
          <h2>Giai Cấp Công Nhân Hiện Nay</h2>

          <h3>1. Khái niệm</h3>
          <p>
            Giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và
            phái triển cùng với quá trình phát triển của nền công nghiệp hiện
            đại; Là giai cấp đại diện cho lực lượng sản xuất tiên tiến; Là lực
            lượng chủ yếu của tiến trình lịch sử quá độ từ chủ nghĩa tư bản lên
            chủ nghĩa xã hội.
          </p>

          {/*Tương đồng */}
          <h3>
            2. Những điểm tương đồng giữa giai cấp công nhân hiện nay với giai
            cấp công nhân thế kỷ XIX
          </h3>
          <ul>
            <li>Vẫn là lực lượng sản xuất hàng đầu của xã hội hiện đại.</li>
            <li>
              Vẫn bị giai cấp tư sản và chủ nghĩa tư bản bóc lột giá trị thặng
              dư.
            </li>
            <li>
              Xung đột lợi ích cơ bản giữa giai cấp công nhân và giai cấp tư sản
              (giữa lao động và tư bản) vẫn tồn tại.
            </li>
            <li>
              Vẫn là lực lượng đi đầu trong cuộc đấu tranh chống chủ nghĩa tư
              bản.
            </li>
          </ul>

          {/*Biến đổi */}
          <h3>3. Sự biến đổi của giai cấp công nhân</h3>
          <p>
            Trong bối cảnh toàn cầu hóa và cách mạng công nghiệp 4.0, giai cấp
            công nhân có nhiều biến đổi quan trọng, song bản chất giai cấp không
            thay đổi.
          </p>
          <ul>
            <li>
              Xu hướng trí tuệ hóa giai cấp công nhân, xuất hiện ngày càng nhiều
              công nhân tri thức, công nhân công nghệ cao.
            </li>
            <li>
              Tham gia vào sở hữu tư liệu sản xuất ở mức độ nhất định, hình
              thành hiện tượng trung lưu hóa một bộ phận công nhân.
            </li>
            <li>
              Xuất hiện những biểu hiện mới của quá trình xã hội hóa lao động
              trong điều kiện toàn cầu hóa.
            </li>
            <li>
              Ở một số nước xã hội chủ nghĩa, giai cấp công nhân trở thành giai
              cấp lãnh đạo thông qua đội tiền phong là Đảng Cộng sản.
            </li>
          </ul>

          {/* Sứ mệnh */}
          <h2>
            Thực Hiện Sứ Mệnh Lịch Sử Của Giai Cấp Công Nhân Trên Thế Giới Hiện
            Nay
          </h2>

          <p>
            Trên phạm vi toàn cầu, giai cấp công nhân hiện nay đang thực hiện sứ
            mệnh lịch sử của mình thông qua ba phương diện cơ bản: kinh tế,
            chính trị và văn hóa – xã hội.
          </p>

          <h3>1. Trên phương diện kinh tế</h3>
          <p>
            Giai cấp công nhân vẫn là lực lượng sản xuất hàng đầu của xã hội
            hiện đại. Thông qua lao động trí tuệ và việc làm chủ khoa học – công
            nghệ, họ tạo ra các tiền đề vật chất – kỹ thuật cho sự phát triển
            của lực lượng sản xuất và sự thay thế phương thức sản xuất tư bản
            chủ nghĩa trong tương lai.
          </p>

          <h3>2. Trên phương diện chính trị</h3>
          <p>
            Mặc dù chủ nghĩa tư bản có những điều chỉnh nhất định, mâu thuẫn
            giữa tư bản và lao động làm thuê vẫn tồn tại. Điều này dẫn đến các
            phong trào đấu tranh đòi quyền lợi của giai cấp công nhân với hình
            thức ngày càng đa dạng và mang tính quốc tế.
          </p>

          <h3>3. Trên phương diện văn hóa – xã hội</h3>
          <p>
            Ở các nước xã hội chủ nghĩa, giai cấp công nhân giữ vai trò lãnh đạo
            trong xây dựng đời sống văn hóa mới. Ở các nước tư bản chủ nghĩa, họ
            là lực lượng tiên phong đấu tranh chống lại những mặt tiêu cực của
            hệ thống, bảo vệ các giá trị tiến bộ và công bằng xã hội.
          </p>

          <div className="highlight-box">
            <h3>💡 Nhận Thức Quan Trọng</h3>
            <p>
              Trong bối cảnh hiện đại, giai cấp công nhân – với những biến đổi
              về trình độ và hình thức lao động – vẫn giữ vai trò là lực lượng
              sản xuất tiên tiến, đồng thời tiếp tục thực hiện sứ mệnh lịch sử
              của mình thông qua đấu tranh kinh tế, chính trị và văn hóa nhằm
              xây dựng một xã hội công bằng, tiến bộ và phát triển bền vững.
            </p>
          </div>

          <div className="navigation-buttons">
            <Link to="/" className="nav-btn prev-btn">
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
