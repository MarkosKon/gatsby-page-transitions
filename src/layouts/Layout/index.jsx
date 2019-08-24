import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import ThemeLayout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";

import AnimatedContent from "./AnimatedContent";
import getAnimation from "./get-animation";

const normalizeMDX = (result, node) => {
  const { slug, order, published } = node.frontmatter;
  if (slug && (order || published)) return result.concat(node.frontmatter);
  return result;
};

const Layout = ({ location, children }) => {
  const previousPathname = useRef();
  const { pathname } = location;

  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            order
            published
            slug
          }
        }
      }
    }
  `);
  const mdx = nodes.reduce(normalizeMDX, []);
  console.log(mdx);

  const animation = getAnimation({
    pathname,
    previousPathname: previousPathname.current,
    mdx
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
