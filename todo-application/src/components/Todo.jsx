import React from 'react';
import todoImg from "../assets/todo-image.png";



const Todo = () => {
  return (
   <>
   <div className="main-class">
    <div className="child-class">
        <figure>
            <img src={todoImg} alt="" />
            <figcaption>This is a todo list</figcaption>
        </figure>
        <div className="add-items" style={{display:"flex"}}>
          <input type="text" placeholder='Add task...'/>
          <i className="pi pi-plus" style={{ fontSize: '1rem' }}></i>
        </div>
    </div>
   </div>
   </>
  )
}

export default Todo