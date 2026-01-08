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
      question: "Giai cấp công nhân là giai cấp nào?",
      options: [
        "Giai cấp bóc lột",
        "Giai cấp bị bóc lột có tính tiến bộ cao nhất",
        "Giai cấp tư sản",
        "Giai cấp địa chủ",
      ],
      correct: 1,
    },
    {
      question: "Sứ mệnh lịch sử của giai cấp công nhân là gì?",
      options: [
        "Bảo vệ quyền lợi kinh tế của riêng mình",
        "Giải phóng toàn bộ loài người, xây dựng xã hội xã hội chủ nghĩa",
        "Tăng sản xuất cho nhà tư sản",
        "Xây dựng chế độ feudal mới",
      ],
      correct: 1,
    },
    {
      question: "Đặc điểm nào là của giai cấp công nhân?",
      options: [
        "Tính phản động",
        "Tính tiến bộ, tính quốc tế, tính tổ chức cao",
        "Tính bảo thủ",
        "Tính cô lập",
      ],
      correct: 1,
    },
    {
      question: "Cuộc kháng chiến chống Pháp (1945-1954) có vai trò gì?",
      options: [
        "Không liên quan đến giai cấp công nhân",
        "Giai cấp công nhân là một trong những lực lượng chủ chốt",
        "Chỉ tư sản mới tham gia",
        "Chỉ nông dân tham gia",
      ],
      correct: 1,
    },
    {
      question:
        "Trong thời kỳ hiện nay, sứ mệnh của công nhân Việt Nam bao gồm?",
      options: [
        "Chỉ đấu tranh vì lợi ích kinh tế",
        "Phát triển kinh tế, nâng cao kỹ năng, xây dựng đoàn kết",
        "Không có sứ mệnh gì",
        "Chỉ chấp hành mệnh lệnh",
      ],
      correct: 1,
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
