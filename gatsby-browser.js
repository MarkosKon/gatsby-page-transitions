import React from "react"
import Layout from "./src/layouts/Layout.jsx"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
