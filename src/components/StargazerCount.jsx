import eyeIcon from "../assets/eye-icon.svg";
import PropTypes from "prop-types";
const StargazerCount = ({ count }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ marginRight: "4px" }} src={eyeIcon} alt="Stargazers" />{" "}
      {count}
    </div>
  );
};
export default StargazerCount;

StargazerCount.propTypes = {
  count: PropTypes.number,
};
