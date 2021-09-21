import TopicList from "./TopicList";
import TopicDetails from "./TopicDetails";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTopic } from "../redux/topicSlice";
import PropTypes from "prop-types";

const TopicsUI = ({ topics }) => {
  const [selected, setSelected] = useState("react");
  const dispatch = useDispatch();

  const handleSelect = (topic) => {
    if (!(topic.name in topics)) {
      dispatch(getTopic(topic.name));
    }
    setSelected(topic.name);
  };

  return (
    <div style={{ display: "flex", border: "solid", borderColor: "#3498DB" }}>
      <div style={{ margin: "20px" }}>
        <TopicList topic={topics} handleSelect={handleSelect} />
      </div>
      <div style={{ margin: "20px" }}>
        <TopicDetails topic={topics[selected]} />
      </div>
    </div>
  );
};
export default TopicsUI;

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object),
};
