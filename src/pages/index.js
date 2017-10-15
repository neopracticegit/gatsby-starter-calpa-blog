import React from 'react';

import moment from 'moment';
import Card from '../components/Card';

import './index.scss';

const parseDate = date =>
  moment(date).format('YYYY/MM/DD');


const HomePage = ({ data }) => (
  <div className="
    col-xl-8
    col-lg-8
    col-md-12
    col-xs-12
    "
  >
    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <Card
        title={node.frontmatter.title}
        date={parseDate(node.frontmatter.date)}
        url={node.frontmatter.parent}
        headerSize={node.frontmatter.headerSize}
        headerImage={node.frontmatter.headerImage}
        headerBackgroundColor={node.frontmatter.headerBackgroundColor}
        key={i}
      />
    ))}
  </div>
);

export default HomePage;

export const pageQuery = graphql`
  query getAllPosts {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            parent
            headerImage
            headerSize
            headerBackgroundColor
          }
        }
      }
    }
  }
`;