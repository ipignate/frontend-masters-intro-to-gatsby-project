import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout title="About this site" description="More info about this site.">
      <GatsbyImage image={getImage(data.file)} alt="a cocktail" />
      <h1>About This Site</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
