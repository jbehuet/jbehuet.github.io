import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Project = ({ project, imageOnLeft }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const image = allFile.nodes.find(file => file.name === project.imageName);

  return (
    <div
      class={`project ${imageOnLeft ? 'even' : 'odd'}`}
      style={{ background: project.background }}
    >
      <div class="inner">
        <div
          class="image"
          data-position={`top ${imageOnLeft ? 'left' : 'right'}`}
        >
          <img src={image.publicURL} alt="" />
        </div>
        <div class="content" data-aos={`fade-up`}>
          <h3>{project.name}</h3>
          <ul>
            {project.details.map((detail, i) => (
              <li key={`project_detail_${i}`}>{detail}</li>
            ))}
            {project.link && (
              <li>
                <i className="fa fa-globe"></i>{' '}
                <a href={project.link.url} className="link link--dark">
                  {project.link.text}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  imageOnLeft: true
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  imageOnLeft: PropTypes.bool
};

export default Project;
