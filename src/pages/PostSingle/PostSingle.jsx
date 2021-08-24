import "./PostSingle.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Comment from "../../components/Comment/Comment";

const PostSingle = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <div className="postsingle">
      <ul className="postsingle__ul">
        <li className="postsingle__list">
          <h4 className="postsingle__title">{post.title}</h4>
          <p className="postsingle__text">{post.body}</p>
        </li>
      </ul>

      <ol className="comments">
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              commentName={comment.name}
              commentEmail={comment.email}
              commentBody={comment.body}
            />
          ))}
      </ol>
    </div>
  );
};
export default PostSingle;
