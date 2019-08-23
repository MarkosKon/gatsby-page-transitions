import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ThemeLayout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";

import AnimatedContent from "./AnimatedContent";
import getAnimation from "./get-animation";

const Layout = ({ location, children }) => {
  const previousPathname = useRef();
  const { pathname } = location;
  const animation = getAnimation({
    pathname,
    previousPathname: previousPathname.current
  });
  useEffect(() => {
    previousPathname.current = pathname;
    console.log("Layout effect");
  }, [pathname]);
  console.log("Layout rendered");
  return (
    <ThemeLayout>
      <AnimatedContent pathname={pathname} animation={animation}>
        {children}
      </AnimatedContent>
    </ThemeLayout>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired
};

export default Layout;
