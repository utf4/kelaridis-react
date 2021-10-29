import * as React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import { Banner, Stats } from "../components/home"
import SEO from "../components/common/SEO";

const IndexPage = ({ data }) => {
  const { welcomeMessage } = data?.allStrapiMessage?.edges[0]?.node;
  const statsData = data?.allStrapiStats?.edges;

  return (
    <>
      <Layout>
        <SEO title={'home'} />
        <Banner welcomeMessage={welcomeMessage}/>
        <Stats data={statsData}/>
      </Layout>
    </>
  )
}

export default IndexPage;

export const query = graphql`
query IndexQuery {
  allStrapiStats {
    edges {
      node {
        id
        title
        stat_value
      }
    }
  }
  allStrapiMessage {
    edges {
      node {
        welcomeMessage
      }
    }
  }
}
`
