import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log(data)
  return (
    <Layout displayHomeLink={true}>
      <SEO title={frontmatter.title} og={{ image: frontmatter.thumbnail.childImageSharp.fixed.base64, description: frontmatter.subtitle }} />
      <Header noHero={true} />
      <div className="wrapper">
        <article dangerouslySetInnerHTML={{ __html: html }} />

        <section className="comments">
          <h2>Commentaires</h2>
          <p>Envoyez-moi un message sur Twitter à <a href="https://twitter.com/jbehuet" className="link link--light">@jbehuet</a> ou mentionnez moi avec votre avis sur le sujet.</p>
        </section>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        thumbnail {
          childImageSharp {
            fixed(base64Width: 400) {
              base64
            }
          }
        }
      }
    }
  }
`;
