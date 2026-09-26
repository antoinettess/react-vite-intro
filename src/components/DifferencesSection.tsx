import { Differences, differences } from "../data";
import Button from "./Button/Button";
import { useState } from "react";

type ContentType = keyof Differences;

export default function DifferencesSection() {
  const [contentType, setContentType] = useState<ContentType | null>(null);

  function handleClick(type: ContentType) {
    setContentType(type);
  }

  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Почему выбирают меня</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Материалы
      </Button>
      <Button
        isActive={contentType === "accessibility"}
        onClick={() => handleClick("accessibility")}
      >
        Удобство
      </Button>
      <Button
        isActive={contentType === "intensity"}
        onClick={() => handleClick("intensity")}
      >
        Скорость
      </Button>

      {!contentType && (
        <p style={{ color: "#2c1f26" }}>
          👆Нажми на кнопку, чтобы узнать подробнее
        </p>
      )}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
