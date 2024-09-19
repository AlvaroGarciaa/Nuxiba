const initialState = {
  users: [],
  posts: [],
  todos: [],
  selectedUser: null,
  showPosts: false,
  showTodos: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_USER_POSTS':
      return { ...state, posts: action.payload, showPosts: true, showTodos: false };
    case 'SET_USER_TODOS':
      return { ...state, todos: action.payload, showPosts: false, showTodos: true };
    case 'ADD_TODO':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload, showPosts: false, showTodos: false };
    default:
      return state;
  }
};

export default rootReducer;


// const initialState = {
//   users: [],
//   posts: [],
//   todos: [],
//   selectedUser: null,
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return { ...state, users: action.payload };
//     case 'SET_USER_POSTS':
//       return { ...state, posts: action.payload };
//     case 'SET_USER_TODOS':
//       return { ...state, todos: action.payload };
//     case 'ADD_TODO':
//       return { ...state, todos: [action.payload, ...state.todos] };
//     case 'SELECT_USER':
//       return { ...state, selectedUser: action.payload };
//     default:
//       return state;
//   }
// };

// export default rootReducer;


