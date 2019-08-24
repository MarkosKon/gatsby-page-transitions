/** @jsx jsx */
import { jsx, Main, Container, Footer, Styled } from "theme-ui";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SkipLink from "@affectionatedoor/gatsby-theme-ui/src/components/SkipLink";
import Header from "@affectionatedoor/gatsby-theme-ui/src/components/Header";
import ThemeSwitcher from "@affectionatedoor/gatsby-theme-ui/src/components/ThemeSwitcher";

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
    allMdx: { nodes },
    site
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
      site {
        siteMetadata {
          title
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
    <Styled.root sx={{ overflow: "hidden" }}>
      <SkipLink>Skip to content</SkipLink>
      <AnimatedContent pathname={pathname} animation={animation}>
        <Header siteTitle={site.siteMetadata.title} />
        <ThemeSwitcher />
        <Main sx={{ minHeight: "70vh" }}>
          <Container
            sx={{
              backgroundColor: "mute"
            }}
          >
            {children}
          </Container>
        </Main>
        <Footer sx={{ p: 4 }}>
          {`© ${new Date().getFullYear()}, Built with`}
          <Styled.a
            sx={{ color: "primary", ml: 1 }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </Styled.a>
        </Footer>
      </AnimatedContent>
    </Styled.root>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired
};

export default Layout;
