import React from 'react';
import { Checkbox, FormControlLabel, Button, TextField } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';


const UserDetail = ({ user, onShowPosts, onShowTodos, showPosts, showTodos, posts, todos, onAddTodo }) => (
  <div style={{color: 'white'}}>
    <div style={{textAlign: 'center', marginBottom: '20px' ,marginTop:'20px'}} >
    <h2>{user.name}</h2>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <div style={{marginTop: '20px'}}> 
      <Button variant="contained" color="primary" onClick={onShowPosts} style={{marginRight: '20px'}}>
        Posts
      </Button>
      <Button variant="contained" color="secondary" onClick={onShowTodos}>
        Todos
      </Button>
    </div>
    </div>
   

    <div style={{margin: '20px'}}> 

    {/* <button onClick={onShowPosts} style={{marginRight: '20px'}}>Posts</button>
    <button onClick={onShowTodos}>Todos</button> */}

    
    </div>
    
      <div textAlign = 'center'>

      {showPosts && (
  <div>
    <h3 style={{paddingLeft: '15px'}}>Posts</h3>
    <List sx={{ paddingTop: '15px' }}>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <ListItemText
            primary={post.title}
            secondary={post.body}
          />
        </ListItem>
      ))}
    </List>
  </div>
)}
    {/* {showPosts && (
      <div>
        <h3>Posts</h3>
        <ul style= {{paddingTop: '15px'}}>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    )} */}


{showTodos && (
  <div style={{}}>
    <h3>Todos</h3>
    <ul style={{ paddingTop: '15px',  listStyleType: 'none'}}>
      {todos.sort((a, b) => b.id - a.id).map((todo) => (
        <li key={todo.id}>
          <FormControlLabel
            control={<Checkbox checked={todo.completed} readOnly />}
            label={todo.title}
          />
        </li>
      ))}
    </ul>
    <div style={{paddingTop: '25px'}}>
    <h3>Add New Todo</h3>
    <form onSubmit={onAddTodo}>
      <TextField
        label="Title"
        name="title"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox name="completed" />}
        label="Completed"
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
    </div>
  </div>
 
)}
    </div>
  </div>
);

export default UserDetail;


