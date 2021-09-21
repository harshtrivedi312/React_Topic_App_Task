import TopicCell from "./TopicCell";
import PropTypes from "prop-types";

const TopicDetails = ({ topic }) => {
  return (
    <div>
      <h3 style={{ margin: 0 }}> Related Topics </h3>
      <div>
        {topic?.relatedTopics?.map((thisTopic) => (
          <TopicCell key={thisTopic.name} topic={thisTopic} />
        ))}
      </div>
    </div>
  );
};
export default TopicDetails;
TopicDetails.propTypes = {
  topic: PropTypes.object,
};
