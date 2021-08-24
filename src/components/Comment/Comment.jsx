import "./Comment.scss";

const Comment = ({ commentName, commentEmail, commentBody }) => {
  return (
    <li className="comment">
      <h1 className="comment__name">{commentName}</h1>
      <h4 className="comment__email">{commentEmail}</h4>
      <p className="comment__body">{commentBody}</p>
    </li>
  );
};

export default Comment;
