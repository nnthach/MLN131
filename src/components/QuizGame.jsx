import React, { useState } from "react";
import "./QuizGame.css";

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "Giai cấp công nhân hiện nay được hiểu là giai cấp nào?",
      options: [
        "Những người lao động tự do trong xã hội",
        "Những người làm nông nghiệp truyền thống",
        "Những người lao động làm thuê trong sản xuất công nghiệp",
        "Những người sở hữu nhiều tư liệu sản xuất",
      ],
      correct: 2,
    },
    {
      question: "Đặc điểm nổi bật của giai cấp công nhân hiện nay là gì?",
      options: [
        "Tính bảo thủ và khép kín",
        "Tính tiến bộ, có tổ chức và kỷ luật",
        "Tính phân tán, cá nhân",
        "Tính lệ thuộc hoàn toàn",
      ],
      correct: 1,
    },
    {
      question:
        "Sự phát triển của khoa học – công nghệ ảnh hưởng thế nào đến giai cấp công nhân?",
      options: [
        "Làm giảm vai trò của công nhân",
        "Không tạo ra thay đổi đáng kể",
        "Làm giai cấp công nhân dần biến mất",
        "Làm tăng yêu cầu về trình độ và kỹ năng",
      ],
      correct: 3,
    },
    {
      question:
        "Giai cấp công nhân trên thế giới hiện nay thực hiện sứ mệnh lịch sử thông qua con đường nào?",
      options: [
        "Phụ thuộc vào giai cấp tư sản",
        "Từ bỏ đấu tranh giai cấp",
        "Đấu tranh giai cấp gắn với tổ chức chính trị",
        "Hoạt động mang tính tự phát",
      ],
      correct: 2,
    },
    {
      question: "Tính quốc tế của giai cấp công nhân thể hiện ở điểm nào?",
      options: [
        "Chỉ hoạt động trong phạm vi quốc gia",
        "Không có mối liên hệ chung",
        "Phụ thuộc vào từng dân tộc riêng lẻ",
        "Có lợi ích chung và tinh thần đoàn kết",
      ],
      correct: 3,
    },
    {
      question: "Vai trò của giai cấp công nhân trong xã hội hiện đại là gì?",
      options: [
        "Lực lượng sản xuất cơ bản và tiên phong",
        "Lực lượng trung gian trong xã hội",
        "Lực lượng phụ trợ không ổn định",
        "Lực lượng dần bị thay thế",
      ],
      correct: 0,
    },
    {
      question:
        "Sứ mệnh lịch sử của giai cấp công nhân trên thế giới hiện nay là gì?",
      options: [
        "Duy trì trật tự xã hội cũ",
        "Xóa bỏ áp bức bóc lột, xây dựng xã hội mới",
        "Chỉ bảo vệ lợi ích cá nhân",
        "Xây dựng chủ nghĩa tư bản",
      ],
      correct: 1,
    },
    {
      question:
        "Giai cấp công nhân Việt Nam ra đời gắn liền với quá trình nào?",
      options: [
        "Toàn cầu hóa hiện đại",
        "Cách mạng công nghiệp 4.0",
        "Phong kiến hóa xã hội",
        "Công nghiệp hóa và khai thác thuộc địa",
      ],
      correct: 3,
    },
    {
      question: "Đặc điểm nổi bật của giai cấp công nhân Việt Nam là gì?",
      options: [
        "Có quyền lực kinh tế mạnh",
        "Hoàn toàn độc lập với dân tộc",
        "Ra đời sớm, chịu áp bức và gắn bó với dân tộc",
        "Ra đời sau giai cấp tư sản",
      ],
      correct: 2,
    },
    {
      question:
        "Giai cấp công nhân Việt Nam có mối quan hệ chặt chẽ với giai cấp nào?",
      options: [
        "Địa chủ phong kiến",
        "Giai cấp tư sản",
        "Nông dân và trí thức",
        "Các tầng lớp đặc quyền",
      ],
      correct: 2,
    },
    {
      question:
        "Nội dung sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay bao gồm?",
      options: [
        "Chỉ tham gia sản xuất",
        "Chỉ đấu tranh chính trị",
        "Lãnh đạo cách mạng, xây dựng và bảo vệ đất nước",
        "Chỉ phát triển kinh tế đơn thuần",
      ],
      correct: 2,
    },
    {
      question:
        "Trong lĩnh vực kinh tế, giai cấp công nhân Việt Nam có nhiệm vụ gì?",
      options: [
        "Phụ thuộc hoàn toàn vào nước ngoài",
        "Chỉ làm lao động giản đơn",
        "Từ bỏ vai trò sản xuất",
        "Đi đầu trong công nghiệp hóa, hiện đại hóa",
      ],
      correct: 3,
    },
    {
      question:
        "Trong lĩnh vực chính trị, giai cấp công nhân Việt Nam giữ vai trò gì?",
      options: [
        "Lực lượng lãnh đạo thông qua Đảng Cộng sản",
        "Không tham gia vào chính trị",
        "Chỉ tham gia bầu cử",
        "Lực lượng đối lập",
      ],
      correct: 0,
    },
    {
      question:
        "Trong lĩnh vực văn hóa – xã hội, giai cấp công nhân Việt Nam cần làm gì?",
      options: [
        "Tách biệt khỏi đời sống xã hội",
        "Giữ nguyên lối sống cũ",
        "Xây dựng lối sống văn minh, tiến bộ",
        "Phụ thuộc vào các giai cấp khác",
      ],
      correct: 2,
    },
    {
      question:
        "Yếu tố quyết định để giai cấp công nhân Việt Nam hoàn thành sứ mệnh lịch sử là gì?",
      options: [
        "Sự hỗ trợ của giai cấp tư sản",
        "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
        "Số lượng công nhân đông đảo",
        "Sự phát triển mang tính tự phát",
      ],
      correct: 1,
    },
    {
      question:
        "Một trong những hạn chế hiện nay của giai cấp công nhân Việt Nam là gì?",
      options: [
        "Không có tổ chức",
        "Quá nhiều quyền lực",
        "Không tham gia sản xuất",
        "Trình độ tay nghề chưa đồng đều",
      ],
      correct: 3,
    },
    {
      question:
        "Giải pháp quan trọng để xây dựng giai cấp công nhân Việt Nam hiện nay là gì?",
      options: [
        "Giảm vai trò của tổ chức",
        "Tách rời công nghệ hiện đại",
        "Nâng cao trình độ chính trị và tay nghề",
        "Hạn chế đào tạo chuyên môn",
      ],
      correct: 2,
    },
    {
      question:
        "Việc xây dựng giai cấp công nhân Việt Nam cần gắn với quá trình nào?",
      options: [
        "Quân sự hóa đất nước",
        "Phong kiến hóa xã hội",
        "Tư bản hóa nền kinh tế",
        "Công nghiệp hóa, hiện đại hóa đất nước",
      ],
      correct: 3,
    },
    {
      question:
        "Giai cấp công nhân Việt Nam là lực lượng nòng cốt trong việc gì?",
      options: [
        "Duy trì trật tự xã hội cũ",
        "Xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa",
        "Bảo vệ lợi ích giai cấp tư sản",
        "Phân hóa các giai cấp xã hội",
      ],
      correct: 1,
    },
    {
      question:
        "Sứ mệnh lịch sử của giai cấp công nhân Việt Nam mang tính chất nào?",
      options: [
        "Chỉ mang tính kinh tế",
        "Chỉ mang tính quốc tế",
        "Vừa mang tính giai cấp vừa mang tính dân tộc",
        "Chỉ mang tính chính trị",
      ],
      correct: 2,
    },
  ];

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-game">
      {showScore ? (
        <div className="score-section">
          <h2>Kết Quả của Bạn</h2>
          <div className="score-display">
            <p>
              Bạn đã trả lời đúng <strong>{score}</strong> trên{" "}
              <strong>{questions.length}</strong> câu hỏi
            </p>
            <div className="score-percentage">
              {((score / questions.length) * 100).toFixed(0)}%
            </div>
          </div>
          <button onClick={restartQuiz} className="restart-btn">
            Làm Lại
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-counter">
            Câu {currentQuestion + 1}/{questions.length}
          </div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={answered}
                className={`option-btn ${
                  selectedAnswer === index ? "selected" : ""
                } ${
                  answered && index === questions[currentQuestion].correct
                    ? "correct"
                    : ""
                } ${
                  answered &&
                  selectedAnswer === index &&
                  index !== questions[currentQuestion].correct
                    ? "incorrect"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {answered && (
            <button onClick={handleNext} className="next-btn">
              {currentQuestion === questions.length - 1
                ? "Hoàn Thành"
                : "Tiếp Theo"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
