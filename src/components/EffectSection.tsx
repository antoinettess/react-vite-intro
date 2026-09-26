import { reviews as initialReviews, Review } from "../data";
import React, { SyntheticEvent, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/userinput";

export default function EffectSection() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5);
  const [localReviews, setLocalReviews] = useState<Review[]>(initialReviews);

  const name = useInput("");
  const text = useInput("");

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!name.value.trim() || !text.value.trim()) {
      alert("Заполните имя и текст");
      return;
    }
    const newReview: Review = {
      id: Date.now(),
      name: name.value,
      rating,
      text: text.value,
    };
    setLocalReviews([newReview, ...localReviews]);
    setModalOpen(false);
    name.setValue("");
    text.setValue("");
    setRating(5);
  }

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Отзывы</h2>
        <Button onClick={() => setModalOpen(true)}>Оставить отзыв</Button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {localReviews.map((r) => (
          <li
            key={r.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{r.name}</strong>
              <span>{"⭐".repeat(r.rating)}</span>
            </div>
            <p style={{ marginTop: "10px", color: "#666" }}>{r.text}</p>
          </li>
        ))}
      </ul>

      <Modal open={modalOpen}>
        <h3>Оставить отзыв</h3>

        <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
          <input className="control" placeholder="Имя" {...name} />

          <select
            className="control"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="5">⭐⭐⭐⭐⭐ Отлично</option>
            <option value="4">⭐⭐⭐⭐ Хорошо</option>
            <option value="3">⭐⭐⭐ Нормально</option>
            <option value="2">⭐⭐ Плохо</option>
            <option value="1">⭐ Ужасно</option>
          </select>

          <textarea
            className="control"
            placeholder="Ваш отзыв"
            rows={3}
            {...text}
          />

          <Button type="submit">Отправить</Button>
          <Button type="button" onClick={() => setModalOpen(false)}>
            Закрыть
          </Button>
        </form>
      </Modal>
    </section>
  );
}
