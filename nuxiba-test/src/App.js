import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchUserPosts, fetchUserTodos, addUserTodo } from './redux/actions';

function App() {
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
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleUserSelect(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>Username: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Username: {selectedUser.username}</p>
        
          <button onClick={handleShowPosts}>Posts</button>
          <button onClick={handleShowTodos}>Todos</button>

          {showPosts && (
            <div>
              <h3>Posts</h3>
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    {/* Fetch and display comments if needed */}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showTodos && (
            <div>
              <h3>Todos</h3>
              <ul>
                {todos.sort((a, b) => b.id - a.id).map((todo) => (
                  <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} readOnly />
                    {todo.title}
                  </li>
                ))}
              </ul>

              <h3>Add New Todo</h3>
              <form onSubmit={handleAddTodo}>
                <label>
                  Title:
                  <input type="text" name="title" required />
                </label>
                <label>
                  Completed:
                  <input type="checkbox" name="completed" />
                </label>
                <button type="submit">Save</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;


