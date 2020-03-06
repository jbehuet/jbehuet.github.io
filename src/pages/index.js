import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";
import 'aos/dist/aos.css';

import '../styles/global.css'
import '../styles/landing.css'
import '../styles/article.css'

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Title from "../components/title"
import CvItem from "../components/cv_item";
import Project from "../components/project";
import PostItem from "../components/post_item";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const { allExperiencesJson, allProjectsJson } = useStaticQuery(
    graphql`
      query {
        allExperiencesJson {
          nodes{
            id
            duration
            details
            title
          }
        }
        allProjectsJson {
          nodes{
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
      }
    `
  )

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          const res = JSON.parse(this.responseText);
          setPosts(res.items);
        } else {
          console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
      }
    };

    xhr.open('GET', 'https://utils.jbehuet.fr/rss?url=https://medium.com/feed/@jbehuet', true);
    xhr.send(null);
  }, [])

  return (
    <>
      <Layout>
        <SEO title="Accueil" />
        <Header />
        <Hero />
        <div className="wrapper">
          <Title title="Réalisations" subtitle="Quelques un des projets réalisés." />
          {allProjectsJson.nodes.map((project, i) => <Project key={project.id} project={project} imageOnLeft={(i % 2 === 0)} />)}
          <div className="callout">
            <p>
              Une question, un projet, une demande particulière où je peux mettre mes compétences à votre contributions. <br />
              N'hésitez à me contacter, je serais ravi de vous répondre.
            </p>
            <a href="mailto:jbehuet@gmail.com" className="button--primary" data-aos="flip-up" data-aos-duration="500"><i className="fa fa-envelope"></i> Me contacter</a>
          </div>
          <Title title="Publications" />
          <div id="posts" className="posts">
            {posts.map((post, i) => <PostItem key={`post_${i}`} post={post} />)}
          </div>
        </div>
        <div className="cv">
          <div className="cv__wrapper">
            <Title title="Expériences" />
            {allExperiencesJson.nodes.map(experience => <CvItem key={experience.id} experience={experience} />)}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IndexPage
