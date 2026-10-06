import Button from "./Button/Button";
import { useState, useEffect, SyntheticEvent } from "react";
import { ways } from "../data";
import useInput from "../hooks/useInput";

interface TouchedState {
  name: boolean;
  phone: boolean;
}

export default function FeedbackSection() {
  const name = useInput("");
  const phone = useInput("");
  const [serviceId, setServiceId] = useState<number>(ways[0].id);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    phone: false,
  });

  const selectedService = ways.find((w) => w.id === Number(serviceId));

  const nameError =
    name.value.trim().length < 2 ? "Имя должно быть минимум 2 символа" : "";

  const phoneDigits = phone.value.replace(/\D/g, "");
  const phoneError =
    phoneDigits.length < 10 ? "Введите корректный номер телефона" : "";

  const isValid = !nameError && !phoneError;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dikidi.app/assets/js/widget_record/widget2.min.js?v=1773811740";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!isValid) {
      setTouched({ name: true, phone: true });
      return;
    }

    setSubmitted(true);
    name.setValue("");
    phone.setValue("");
    setServiceId(ways[0].id);
    setTouched({ name: false, phone: false });
  }

  if (submitted) {
    return (
      <section
        style={{
          maxWidth: "500px",
          margin: "20px auto 0",
          textAlign: "center",
        }}
      >
        <h2>Спасибо за запись! </h2>
        <p style={{ marginTop: "10px", color: "#666" }}>
          Я свяжусь с вами в ближайшее время для подтверждения.
        </p>
        <Button
          style={{ marginTop: "20px" }}
          onClick={() => setSubmitted(false)}
        >
          Записаться ещё раз
        </Button>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Запись на процедуру</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          placeholder="Как к вам обращаться"
          {...name}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          style={{
            borderColor: touched.name && nameError ? "#f20808" : undefined,
          }}
        />
        {touched.name && nameError && (
          <p style={{ color: "#f20808", fontSize: "13px", marginTop: "-8px" }}>
            {nameError}
          </p>
        )}

        <label htmlFor="phone">Телефон</label>
        <input
          id="phone"
          type="tel"
          className="control"
          placeholder="+7 (___) ___-__-__"
          {...phone}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          style={{
            borderColor: touched.phone && phoneError ? "#f20808" : undefined,
          }}
        />
        {touched.phone && phoneError && (
          <p style={{ color: "#f20808", fontSize: "13px", marginTop: "-8px" }}>
            {phoneError}
          </p>
        )}

        <label htmlFor="service">Услуга</label>
        <select
          id="service"
          className="control"
          value={serviceId}
          onChange={(e) => setServiceId(Number(e.target.value))}
        >
          {ways.map((way) => (
            <option key={way.id} value={way.id}>
              {way.title}-{way.price} ₽
            </option>
          ))}
        </select>
        <div
          style={{
            background: "#f9eff9",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Итого:</span>
          <span style={{ color: "#b87e9d" }}>
            {selectedService?.price ?? 0} ₽
          </span>
        </div>

        <Button type="submit" disabled={!isValid}>
          Оставить заявку
        </Button>
      </form>

      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#b87e9d", marginBottom: "15px", fontSize: "14px" }}>
          Хотите выбрать конкретное время? Запишитесь онлайн:
        </p>
        <a
          href="https://dikidi.net/#widget=218537"
          className="button"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "0.8rem 2rem",
            color: "#fff",
          }}
        >
          Записаться онлайн
        </a>
      </div>
    </section>
  );
}
