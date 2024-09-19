import React from 'react';

const UserDetail = ({ user, onShowPosts, onShowTodos, showPosts, showTodos, posts, todos, onAddTodo }) => (
  <div>
    <h2>{user.name}</h2>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <button onClick={onShowPosts}>Posts</button>
    <button onClick={onShowTodos}>Todos</button>

    {showPosts && (
      <div>
        <h3>Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
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
        <form onSubmit={onAddTodo}>
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
);

export default UserDetail;


