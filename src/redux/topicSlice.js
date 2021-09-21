import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const topicSlice = createSlice({
  name: "topic",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const topic = action.payload;
      const newTopics = { ...state.topics };
      newTopics[topic.name] = topic;
      state.topics = newTopics;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("topic/getData", () => {});
  },
});

const graphql = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
  method: "post",
});

const InitializeTopic = async (dispatch) => {
  const topicName = "react";
  dispatch(getTopic(topicName));
};

const getTopic = createAsyncThunk(
  "topic/getData",
  async (topicName, thunkAPI) => {
    const response = await graphql.post(process.env.REACT_APP_GRAPHQL_URL, {
      query: `
      query {
        topic(name: "${topicName}") {
          name
          relatedTopics(first: 10) {
            name
            stargazerCount
          }
          stargazerCount
        }
      }`,
    });
    thunkAPI.dispatch(addTopic(response.data.data.topic));
  }
);

export { topicSlice, InitializeTopic, getTopic };

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicSlice.actions;

export default topicSlice.reducer;
