import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersStorage = localStorage.getItem('users_bd');
    setUsers(JSON.parse(usersStorage));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.cpf}>{user.cpf}</li>
      ))}
    </ul>
  );
}

export default UserList;
