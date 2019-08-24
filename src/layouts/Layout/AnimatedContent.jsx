/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const AnimatedContent = ({ pathname, animation, children }) => {
  console.log("AnimatedContent rendered", animation);
  return (
    <div
      key={pathname}
      sx={{
        animation: `${animation} .7s cubic-bezier(.62,.59,0,.99);`
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
