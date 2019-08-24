/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import PropTypes from "prop-types";

const AnimatedContent = ({ pathname, animation, children }) => {
  console.log("AnimatedContent rendered", animation);
  return (
    <div
      key={pathname}
      sx={{
        p: 3,
        animation: `${animation} .55s cubic-bezier(.62,.59,0,.99);`
      }}
    >
      <Container
        sx={{
          backgroundColor: "mute"
        }}
      >
        {children}
      </Container>
    </div>
  );
};

AnimatedContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  animation: PropTypes.shape({}).isRequired,
  children: PropTypes.element.isRequired
};

export default AnimatedContent;
