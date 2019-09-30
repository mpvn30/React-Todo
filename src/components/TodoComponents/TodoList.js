// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css'
import Todo from './Todo';

const toDoList = props => {
    return(
        <div className = "todo-list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} /> 
            ))}
        <button className="clear-btn" onClick={props.clear}>Clear list</button>
        </div>
    )
}

export default toDoList;