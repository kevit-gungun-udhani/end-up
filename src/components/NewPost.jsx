import classes from './NewPost.module.css'
import { useNoDuplicate } from '../hook-store/NoDuplicates';
import { useState } from 'react';

function NewPost({onCancel, addPost}) {
  
  const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState(useNoDuplicate);
    
    function onBodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function onInputChangeHandler(event){
        setEnteredName(event.target.value)
    }

    function onsubmitHandler(event){
      event.preventDefault();
      const postData = {
        body: enteredBody,
        name: enteredName
      }
      addPost(postData);
      onCancel();
    }
  return (
    <form className={classes.form} onSubmit={onsubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onInputChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;