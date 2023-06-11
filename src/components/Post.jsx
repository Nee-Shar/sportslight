import "../css/post.css";
import PropTypes from "prop-types";

function Post({ image, content, url }) {
  return (
    <div className="post">
      <img src={image} alt="Post Image" />

      <div className="news-text">
        <p>
          {content}
          <a href={url}> Read More </a>
        </p>
      </div>
    </div>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
