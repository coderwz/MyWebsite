import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html } = markdownRemark
  return <Layout title="My Reading List" path='/reading/'>
    <div className="reading-list-container markdown">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  </Layout>
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`