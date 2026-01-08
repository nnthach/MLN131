import React, { useState, useCallback } from "react";
import "./MemoryGame.css";

// 🔧 Hàm shuffle (ngoài component)
function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function MemoryGame() {
  const pairs = [
    {
      id: 1,
      question: "Giai cấp công nhân là giai cấp nào?",
      answer: "Giai cấp bị bóc lột có tính tiến bộ cao nhất",
    },
    {
      id: 2,
      question: "Sứ mệnh lịch sử của giai cấp công nhân?",
      answer: "Giải phóng toàn bộ loài người",
    },
    {
      id: 3,
      question: "Ba đặc điểm chính của giai cấp công nhân?",
      answer: "Tính tiến bộ, tính quốc tế, tính tổ chức cao",
    },
    {
      id: 4,
      question: "Ai là lực lượng chủ chốt trong kháng chiến 1945-1954?",
      answer: "Giai cấp công nhân",
    },
    {
      id: 5,
      question: "Giai cấp công nhân Việt Nam đóng góp gì hiện nay?",
      answer: "Phát triển kinh tế, nâng cao kỹ năng, xây dựng đoàn kết",
    },
    {
      id: 6,
      question: "Công nhân có quốc gia riêng không?",
      answer: "Không, họ không có quốc gia, lợi ích chung của loài người",
    },
  ];

  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [lockBoard, setLockBoard] = useState(false);

  // ✅ SHUFFLE 1 LẦN – KHÔNG EFFECT – KHÔNG RENDER LẠI
  const [shuffledAnswers, setShuffledAnswers] = useState(() =>
    shuffleArray(pairs)
  );

  const isGameWon = matched.length === pairs.length * 2;

  const initializeGame = useCallback(() => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setLockBoard(false);
    setShuffledAnswers(shuffleArray(pairs));
  }, []);

  const handleCardClick = (type, id) => {
    if (lockBoard) return;

    const cardKey = `${type}-${id}`;
    if (flipped.includes(cardKey) || matched.includes(cardKey)) return;

    const newFlipped = [...flipped, cardKey];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      setMoves((prev) => prev + 1);

      const [first, second] = newFlipped;
      const [type1, id1] = first.split("-");
      const [type2, id2] = second.split("-");

      if (id1 === id2 && type1 !== type2) {
        setMatched((prev) => [...prev, first, second]);
      }

      setTimeout(() => {
        setFlipped([]);
        setLockBoard(false);
      }, 800);
    }
  };

  return (
    <div className="memory-game-two-sided">
      {isGameWon ? (
        <div className="game-won">
          <h2>🎉 Chúc mừng!</h2>
          <p>
            Hoàn thành trong <strong>{moves}</strong> lượt
          </p>
          <button className="restart-btn" onClick={initializeGame}>
            Chơi lại
          </button>
        </div>
      ) : (
        <>
          <div className="game-stats">
            <h3>Số lượt: {moves}</h3>
            <p>Nối đúng câu hỏi với câu trả lời</p>
          </div>

          <div className="two-sided-container">
            {/* CÂU HỎI */}
            <div className="side">
              <h3>Câu Hỏi</h3>
              <div className="cards-list">
                {pairs.map((pair) => {
                  const key = `question-${pair.id}`;
                  return (
                    <div
                      key={key}
                      className={`question-card ${
                        flipped.includes(key) || matched.includes(key)
                          ? "flipped"
                          : ""
                      } ${matched.includes(key) ? "matched" : ""}`}
                      onClick={() => handleCardClick("question", pair.id)}
                    >
                      <div className="card-inner">
                        <div className="card-front">?</div>
                        <div className="card-back">
                          <p className="card-text">{pair.question}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CÂU TRẢ LỜI */}
            <div className="side">
              <h3>Câu Trả Lời</h3>
              <div className="cards-list">
                {shuffledAnswers.map((pair) => {
                  const key = `answer-${pair.id}`;
                  return (
                    <div
                      key={key}
                      className={`answer-card ${
                        flipped.includes(key) || matched.includes(key)
                          ? "flipped"
                          : ""
                      } ${matched.includes(key) ? "matched" : ""}`}
                      onClick={() => handleCardClick("answer", pair.id)}
                    >
                      <div className="card-inner">
                        <div className="card-front">?</div>
                        <div className="card-back">
                          <p className="card-text">{pair.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
