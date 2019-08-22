import React from "react"
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout"

export default ({ location, children }) => {
  const { pathname } = location
  return (
    <Layout>
      <pre>Pathname: {JSON.stringify(pathname, null, 2)}</pre>
      <div>{children}</div>
    </Layout>
  )
}
