import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitializeTopic, selectTopics } from "../redux/topicSlice";
import TopicsUI from "../components/TopicsUI";

const Home = () => {
  const dispatch = useDispatch();
  const topicList = useSelector(selectTopics);

  useEffect(() => {
    dispatch(InitializeTopic);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopicsUI topics={topicList} />
    </div>
  );
};

export default Home;
