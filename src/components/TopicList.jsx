import TopicButton from "./TopicButton";
import PropTypes from "prop-types";

const TopicList = ({ topic, handleSelect }) => {
  return (
    <div>
      {topic?.react?.relatedTopics.map((topic) => (
        <div key={topic.name}>
          {<TopicButton topic={topic} handleSelect={handleSelect} />}
        </div>
      ))}
    </div>
  );
};
export default TopicList;
TopicList.propTypes = {
  topics: PropTypes.object,
  handleSelect: PropTypes.func,
};
