/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const AnimatedContent = ({ animation, children }) => {
  console.log("AnimatedContent rendered", animation);
  return <div sx={{ backgroundColor: "mute", p: 3 }}>{children}</div>;
};

AnimatedContent.propTypes = {
  animation: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default AnimatedContent;
