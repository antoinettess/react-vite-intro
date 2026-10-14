import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reviews as initialReview, Review } from "../data";

interface ReviewState {
  reviews: Review[];
}

const loadInitialState = (): ReviewState => {
  const savedReviews = localStorage.getItem("reviews");
  if (savedReviews) {
    try {
      return { reviews: JSON.parse(savedReviews) };
    } catch (error) {
      console.error("Ошибка при загрузке отзывов", error);
    }
  }
  return { reviews: initialReview };
};
const initialState: ReviewState = loadInitialState();

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: loadInitialState(),
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.unshift(action.payload);
    },
    removeReview: (state, action: PayloadAction<number>) => {
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload,
      );
    },
    resetReviews: (state) => {
      state.reviews = [];
    },
  },
});

export const { addReview, removeReview, resetReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
