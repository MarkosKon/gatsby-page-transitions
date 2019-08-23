/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const AnimatedContent = ({ pathname, animation, children }) => {
  console.log("AnimatedContent rendered", animation);
  return (
    <div
      key={pathname}
      sx={{
        backgroundColor: "mute",
        p: 3,
        animation: `${animation} .5s ease;`
      }}
    >
      {children}
    </div>
  );
};

AnimatedContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  animation: PropTypes.shape({}).isRequired,
  children: PropTypes.element.isRequired
};

export default AnimatedContent;
