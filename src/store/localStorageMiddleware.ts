import type { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    try {
      const state = store.getState();
      localStorage.setItem("reviews", JSON.stringify(state.reviews.reviews));
    } catch (error) {
      console.error("Ошибка при сохранении", error);
    }
    return result;
  };
