import React, { useEffect } from 'react';
import {Card} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUserPosts, fetchUserTodos, addUserTodo } from '../redux/actions';
import UserList from '../components/UserList';
import UserDetail from '../components/UserDetail';
import './AppContainer.css';
import { blue, purple } from '@mui/material/colors';

const AppContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedUser = useSelector((state) => state.selectedUser);
  const posts = useSelector((state) => state.posts);
  const todos = useSelector((state) => state.todos);
  const showPosts = useSelector((state) => state.showPosts);
  const showTodos = useSelector((state) => state.showTodos);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserSelect = (user) => {
    dispatch({ type: 'SELECT_USER', payload: user });
  };

  const handleShowPosts = () => {
    if (selectedUser) {
      dispatch(fetchUserPosts(selectedUser.id));
    }
  };

  const handleShowTodos = () => {
    if (selectedUser) {
      dispatch(fetchUserTodos(selectedUser.id));
    }
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const completed = form.completed.checked;
    const newTodo = { title, completed };
    dispatch(addUserTodo(selectedUser.id, newTodo));
    form.reset();
  };

  return (
    <div className="App">
  <Card
    style={{
      maxWidth: 400,
      margin: '50px 20px 0 ', // Margen de 50px en la parte superior
      padding: '20px',
      backgroundColor: '#300999' // Color morado oscuro
    }}
  >
    <UserList users={users} onUserSelect={handleUserSelect} />
    {selectedUser && (
      <UserDetail
        user={selectedUser}
        onShowPosts={handleShowPosts}
        onShowTodos={handleShowTodos}
        showPosts={showPosts}
        showTodos={showTodos}
        posts={posts}
        todos={todos}
        onAddTodo={handleAddTodo}
      />
    )}
  </Card>
</div>

  );
};

export default AppContainer;
