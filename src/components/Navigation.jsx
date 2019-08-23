/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link";

const Navigation = () => {
  return (
    <nav>
      <Styled.ul>
        <Styled.li>
          <Link to="/">Home</Link>
        </Styled.li>
        <Styled.li>
          <Link to="/posts/">Posts</Link>
        </Styled.li>
        <Styled.li>
          <Link to="/projects/">Projects</Link>
        </Styled.li>
      </Styled.ul>
    </nav>
  );
};

export default Navigation;
