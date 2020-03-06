import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'aos/dist/aos.css';

import '../styles/global.css';
import '../styles/landing.css';
import '../styles/article.css';

import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Title from '../components/title';
import CvItem from '../components/cv_item';
import Project from '../components/project';
import PostItem from '../components/post_item';

const IndexPage = () => {
  const {
    allExperiencesJson,
    allProjectsJson,
    allMarkdownRemark
  } = useStaticQuery(
    graphql`
      query {
        allExperiencesJson {
          nodes {
            id
            duration
            details
            title
          }
        }
        allProjectsJson {
          nodes {
            id
            name
            details
            imageName
            background
            link {
              text
              url
            }
          }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          nodes {
            id
            frontmatter {
              title
              subtitle
              thumbnail {
                publicURL
              }
              date
              creator
              path
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos');
    AOS.init({
      once: true
    });
  }, []);

  return (
    <>
      <Layout>
        <SEO title="Accueil" />
        <Header />
        <Hero />
        <div className="wrapper">
          <Title
            title="Réalisations"
            subtitle="Quelques un des projets réalisés."
          />
          {allProjectsJson.nodes.map((project, i) => (
            <Project
              key={project.id}
              project={project}
              imageOnLeft={i % 2 === 0}
            />
          ))}
          <div className="callout">
            <p>
              Une question, un projet, une demande particulière où je peux
              mettre mes compétences à votre contributions. <br />
              N'hésitez à me contacter, je serais ravi de vous répondre.
            </p>
            <a
              href="mailto:jbehuet@gmail.com"
              className="button--primary"
              data-aos="flip-up"
              data-aos-duration="500"
            >
              <i className="fa fa-envelope"></i> Me contacter
            </a>
          </div>
          <Title
            title="Publications"
            subtitle="Mes rédactions personnelles publiées."
          />
          <div id="posts" className="posts">
            {allMarkdownRemark.nodes.map(post => (
              <PostItem key={post.id} post={post.frontmatter} />
            ))}
          </div>
        </div>
        <div className="cv">
          <div className="cv__wrapper">
            <Title title="Expériences" />
            {allExperiencesJson.nodes.map(experience => (
              <CvItem key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
