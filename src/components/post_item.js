import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostItem = ({ post }) => (
  <div data-aos="flip-left">
    <Link className="card" to={post.path}>
      <div
        className="thumb"
        style={{
          backgroundImage: `url(${post.thumbnail.childImageSharp.fixed.base64})`
        }}
      />
      <div className="content">
        <div className="title">{post.title}</div>
        {post.subtitle}
        <span>{post.creator}</span>
      </div>
    </Link>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
