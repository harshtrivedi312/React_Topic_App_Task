import StargazerCount from "./StargazerCount";
import PropTypes from "prop-types";
const TopicButton = ({ topic, handleSelect }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        handleSelect(topic);
      }}
    >
      <div style={{ marginRight: "6px" }}>{topic.name}</div>{" "}
      <StargazerCount count={topic.stargazerCount} />
    </button>
  );
};
export default TopicButton;

TopicButton.propTypes = {
  topic: PropTypes.object,
  handleSelect: PropTypes.func,
};
