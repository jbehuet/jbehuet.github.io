import React from 'react';
import PropTypes from 'prop-types';

const CvItem = ({ experience }) => (
  <div className="cv__item">
    <div className="cv__meta" data-aos="fade-right">
      <h4 className="cv__title">
        {experience.title}, {experience.company}
      </h4>
      <small className="cv__date">{experience.duration}</small>
    </div>
    <div className="cv__detail" data-aos="fade-right">
      <ul>
        {experience.details.map((detail, i) => (
          <li key={`cv_detail_${i}`}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

CvItem.propTypes = {
  experience: PropTypes.object.isRequired
};

export default CvItem;
