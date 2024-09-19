import React from 'react';

const UserList = ({ users, onUserSelect }) => (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <button onClick={() => onUserSelect(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
