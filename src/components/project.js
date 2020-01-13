import React from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
  `)
    const image = allFile.nodes.find(file => file.name === project.imageName);
    return (
        <div className="folio" data-aos="fade">
            {imageOnLeft &&
                <ul
                    className="folio__detail"
                    style={{ background: `url(${image.publicURL})`, backgroundSize: 'cover' }}
                ></ul>
            }
            <ul
                className="folio__detail folio__description"
                style={{ background: project.background, color: '#fbfbfb' }}>
                <h3 className="folio__title">{project.name}</h3>
                {project.details.map((detail, i) => <li key={`project_detail_${i}`}>{detail}</li>)}
                {project.link &&
                    <li>
                        <i className="fa fa-globe"></i> <a href={project.link.url} className="link link--white">{project.link.text}</a>
                    </li>
                }
            </ul>
            {!imageOnLeft &&
                <ul
                    className="folio__detail"
                    style={{ background: `url(${image.publicURL})`, backgroundSize: 'cover' }}
                ></ul>
            }
        </div >
    );
}

Project.defaultProps = {
    imageOnLeft: true,
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
    imageOnLeft: PropTypes.bool
}

export default Project;