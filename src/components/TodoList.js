import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos,fillteTodos})=>{
    
    return(
    <div className='Todo-div'>
        <ul>
           {fillteTodos.map( todo => (
               <Todo 
                todos = {todos}
                setTodos={setTodos}
                todo={todo}
                text={todo.text}
                 key={todo.id}/>
           ))}
        </ul>
    </div>  
    )
}
export default TodoList;