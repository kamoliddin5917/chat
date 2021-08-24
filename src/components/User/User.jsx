import "./User.scss";
import { Link } from "react-router-dom";

const User = ({ userId, userName, userUserName }) => {
  return (
    <li className="user">
      <Link className="user__link" to={`/${userId}`}>
        <h3 className="user__name">{userName}</h3>
        <p className="user__username">@{userUserName}</p>
      </Link>
    </li>
  );
};

export default User;
