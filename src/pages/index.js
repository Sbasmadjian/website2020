import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import { StyledIndex } from '../components/styles/index-page';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;

    return (
      <React.Fragment>
        <StyledIndex>
          <Layout location={this.props.location} title={siteTitle}>
            <SEO />
            <p>Writer</p>
            <nav>
              <p>
                <Link to="/projects">Short Stories</Link>
              </p>
              <p>
                <Link to="/writings">Writings</Link>
              </p>
            </nav>
          </Layout>
        </StyledIndex>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
