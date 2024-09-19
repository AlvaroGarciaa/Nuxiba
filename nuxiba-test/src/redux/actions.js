// Acción para obtener los usuarios de la API
export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_USERS', payload: data });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  };
  

  // Acción para obtener posts del usuario
export const fetchUserPosts = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const posts = await response.json();
      dispatch({ type: 'SET_USER_POSTS', payload: posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};

// Acción para obtener todos (tasks) del usuario
export const fetchUserTodos = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      const todos = await response.json();
      dispatch({ type: 'SET_USER_TODOS', payload: todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};

// Acción para agregar una nueva tarea
export const addUserTodo = (userId, todo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...todo, userId }),
      });
      const newTodo = await response.json();
      dispatch({ type: 'ADD_TODO', payload: newTodo });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
};