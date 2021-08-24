import { useEffect, useState } from "react";
import "./Saidbar.scss";

// components

import User from "../User/User";

const Saidbar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => respons.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="saidbar">
      <h1 className="saidbar__title">Users</h1>
      {users.length > 0 && (
        <ul className="users">
          {users.map((user) => (
            <User
              key={user.id}
              userId={user.id}
              userName={user.name}
              userUserName={user.username}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Saidbar;
