import { Way } from "../../data.ts";
import "./WayToTeach.css";

export default function WayToTeach({ title, description, price, time }: Way) {
  return (
    <li className="way-card">
      <span className="way-card-title">{title}</span>
      <span className="way-card-price">{price} ₽</span>
      <p className="way-card-desc">{description}</p>
      <div className="way-card-time">⏱ {time}</div>
    </li>
  );
}
