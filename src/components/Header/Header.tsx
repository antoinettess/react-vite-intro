import { useState, useEffect } from "react";
import { master } from "../../data";

export default function Header() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: "1px solid #e5d9cc",
        fontSize: "14px",
        color: "#666",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <span>
        📍 {master.city}, {master.address}
      </span>
      <span>🕐 {now.toLocaleTimeString("ru-RU")}</span>
    </header>
  );
}
