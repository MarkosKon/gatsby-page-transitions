/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link"

export default () => (
  <main>
    <Styled.h1>Hello world!</Styled.h1>
    <Link to="/mdx/">Go to the MDX page</Link>
  </main>
)
