import React , { useRef }from 'react'

const TodoItem = (props) => {
    const { i, updateTodo, removeTodo, completeTodo } = props;
    console.log("i value",i);

    const inputRef = useRef(true);
  
    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (id, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateTodo({ id, item: value });
        inputRef.current.disabled = true;
      }
    };
    return (
        
        <div>
             <li key={i.id} className ="card">
                    <textarea 
                    ref={inputRef} 
                    disabled={inputRef} 
                    defaultValue={i.item}
                    onKeyPress={(e)=>update(i.id,inputRef.current.value,e)} />
                    
                    <div className="btns">
                    <button onClick={()=>changeFocus()}>Edit</button>
                    <button onClick={()=>completeTodo(i.id)}>Complete</button>
                    <button onClick={()=>removeTodo(i.id)}>Delete</button> 
                    </div>
                    {i.completed && <span className="completed">Done</span>}
                  </li>
        </div>
    )
}

export default TodoItem
