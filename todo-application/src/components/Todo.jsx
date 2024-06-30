import React from 'react';
import todoImg from "../assets/todo-image.png";



const Todo = () => {
  return (
    <>
      <div className="main-class">
        <div className="child-class" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <figure>
            <img src={todoImg} style={{width: "70px",height: "65px", marginBottom:"10px"}} />
            <figcaption>This is a todo list</figcaption>
          </figure>
          <div className="add-items" style={{ display: "flex" }}>
            <input type="text" placeholder='Add task...' title='add task' />
            <i className="pi pi-plus" style={{ fontSize: '1rem' }}></i>
          </div>
          <div className="showItems">
            <div className="eachItem" style={{ display: "flex", alignItems: "center", width: "193px", height: "3rem", backgroundColor: "yellowgreen",marginTop:"1rem" }}>
              <h3 style={{width:"170px", display:"flex",alignItems:"flex-start"}}>Apple</h3>
              <i className="pi pi-trash" style={{ fontSize: '1rem' }}></i>
            </div>
          </div>
          <div className="button-container" >
            <button style={{backgroundColor:"orchid", marginTop:"2rem"}}>Check List</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo