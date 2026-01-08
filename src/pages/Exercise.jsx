import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercise.css";
import QuizGame from "../components/QuizGame";
import MemoryGame from "../components/MemoryGame";

export default function Exercise() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="exercise-wrap">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Bài Tập & Luyện Tập</h1>
          <p className="banner-subtitle">
            Kiểm tra và nâng cao kiến thức của bạn về chủ nghĩa xã hội khoa học
          </p>
        </div>
      </section>

      {/* Game Selection or Game Section */}
      <section className="game-section">
        <div className="game-container">
          {!selectedGame ? (
            // Game Selection
            <div className="game-selection">
              <h2>Chọn Trò Chơi Của Bạn</h2>
              <div className="game-options">
                <div
                  className="game-option"
                  onClick={() => setSelectedGame("quiz")}
                >
                  <div className="option-icon">📝</div>
                  <h3>Câu Hỏi Trắc Nghiệm</h3>
                  <p>
                    Trả lời 5 câu hỏi về giai cấp công nhân và sứ mệnh lịch sử
                  </p>
                  <button className="option-btn">Chọn</button>
                </div>

                <div
                  className="game-option"
                  onClick={() => setSelectedGame("memory")}
                >
                  <div className="option-icon">🎴</div>
                  <h3>Game Lật Bài</h3>
                  <p>Tìm cặp câu hỏi và trả lời giống nhau</p>
                  <button className="option-btn">Chọn</button>
                </div>
              </div>
            </div>
          ) : (
            // Game Display
            <div className="game-display">
              <button
                className="back-btn"
                onClick={() => setSelectedGame(null)}
              >
                ← Quay Lại
              </button>
              {selectedGame === "quiz" ? <QuizGame /> : <MemoryGame />}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
