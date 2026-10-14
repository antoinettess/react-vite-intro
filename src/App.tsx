import Header from "./components/Header/Header";
import "./App.css";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection";

type Tab = "main" | "feedback" | "effect";

export default function App() {
  const [tab, setTab] = useState<Tab>("main");

  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={setTab} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}
      </main>
    </div>
  );
}
