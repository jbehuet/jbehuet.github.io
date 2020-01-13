import React from "react";
import PropTypes from "prop-types";

const PostItem = ({ post }) => (
    <div data-aos="flip-left">
        <a className="card" href={post.link}>
            <div className="thumb" style={{ backgroundImage: `url(${post["content:encoded"].match(/src=(.+?[.jpg|.jpeg|.gif]")/)[1]})` }} />
            <article>
                <h1>{post.title}</h1>
                {(post["content:encoded"].split('</h4>')[0].substr(4))}
                <span>{post.creator}</span>
            </article>
        </a>
    </div>
);

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostItem;