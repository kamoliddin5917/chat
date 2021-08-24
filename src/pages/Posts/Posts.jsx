import "./Posts.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components

import Post from "../../components/Post/Post";

const Posts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((respons) => respons.json())
      .then((date) => {
        let filterPosts = date.filter((post) => post.userId === Number(userId));
        setUserPosts(filterPosts);
      });
  }, [userId]);

  return (
    <div className="posts">
      <h1 className="posts__user">Jek</h1>

      {userPosts.length > 0 ? (
        <ul className="posts__ul">
          {userPosts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              postTitle={post.title}
              postBody={post.body}
            />
          ))}
        </ul>
      ) : (
        <h1>Yo'q!</h1>
      )}
    </div>
  );
};

export default Posts;
