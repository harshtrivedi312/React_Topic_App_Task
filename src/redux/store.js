import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./topicSlice";

export const store = configureStore({
  reducer: {
    topics: topicReducer,
  },
});
