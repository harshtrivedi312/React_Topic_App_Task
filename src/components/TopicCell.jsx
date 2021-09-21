import StargazerCount from "./StargazerCount";
import PropTypes from "prop-types";

const TopicCell = ({ topic }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "6px" }}>{topic.name} </div>
      <StargazerCount count={topic.stargazerCount} />
    </div>
  );
};
export default TopicCell;

TopicCell.propTypes = {
  topic: PropTypes.object,
};
