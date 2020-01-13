import React from "react"
import PropTypes from "prop-types"

const Title = ({ title, subtitle }) => (
    <div className="section--title" data-aos="fade" data-aos-duration="500">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
    </div>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default Title
