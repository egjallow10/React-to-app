import React from 'react';


const Todo = ({text,todo,  todos, setTodos})=>{

    const deleteHandler = ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
        console.log(todo);
    }
    const completeHandle=()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
               return{
                   ...item, completed: !item.completed,
               }     
            }
            return item;
        }))
    }
    return(
        <div className='todo-list'>
        <li className={ `${todo.completed ? "completed" : ""}`} > {text}</li>
            <button onClick={completeHandle}>Complete</button>
            <button onClick= {deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo;