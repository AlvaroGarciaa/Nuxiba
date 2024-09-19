import React from 'react';
import { Button } from '@mui/material';

const UserList = ({ users, onUserSelect }) => (
  <div>
    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Usuarios</h1> {}
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          <Button 
            variant="contained" 
            color="primary" 
            style={{ width: '100%' }}
            onClick={() => onUserSelect(user)}
          >
            {user.name}
          </Button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
