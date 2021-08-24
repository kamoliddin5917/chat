import "./Post.scss";
import { Link, useParams } from "react-router-dom";

const Post = ({ postId, postTitle, postBody }) => {
  const { userId } = useParams();
  return (
    <li className="post">
      <Link to={`/${userId}/${postId}`} className="post__link">
        <h4 className="post__title">{postTitle}</h4>
        <p className="post__text">{postBody}</p>
      </Link>
    </li>
  );
};
export default Post;
