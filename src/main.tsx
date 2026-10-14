import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Не найден элемент #root в index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
