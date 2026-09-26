import Button from "./Button/Button";

type Tab = "main" | "feedback" | "effect";

interface TabSectionProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function TabsSection({ active, onChange }: TabSectionProps) {
  return (
    <section style={{ marginBottom: "20px" }}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Услуги
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Запись
      </Button>
      <Button isActive={active === "effect"} onClick={() => onChange("effect")}>
        Отзывы
      </Button>
    </section>
  );
}
