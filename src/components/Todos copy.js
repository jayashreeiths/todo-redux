import React,{ useState,useRef } from "react" ;
import { connect } from "react-redux";
import { addTodos, removeTodos, updateTodos, completeTodos } from "../redux/reducer";
const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodo: (id) => dispatch(removeTodos(id)),
      updateTodo: (obj) => dispatch(updateTodos(obj)),
      completeTodo: (id) => dispatch(completeTodos(id)),
    };
  };
  
  const Todos = (props) => {
      const [todo, setTodo] = useState("");

      const inputRef = useRef(true); //Reference to textarea

      /* To change focus to textarea and edit the the textarea content */
      const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
      }

      const update = (id,value,e) =>{
        //13 is key code for ENTER key  
        if(e.which === 13){
            props.updateTodo( {id,item:value});
            inputRef.current.disabled = true;
          }
      }

      const handleChange = (e)=>{
       setTodo(e.target.value)
      }
      
      console.log("props value",props);
    return (
        <div className="addTodos">
            <input type="text" onChange ={(e)=>handleChange(e)} className="todo-input" />
            <button className="add-dtn"onClick ={()=>props.addTodo({
                id:Math.floor(Math.random()*1000),
                item:todo,
                completed:false,
            })} >Add</button>
            <br />
            <ul>
              {
                props.todos.map(i=>{
                  return (
                  <li key={i.id}>
                    <textarea 
                    ref={inputRef} 
                    disabled={inputRef} 
                    defaultValue={i.item}
                    onKeyPress={(e)=>update(i.id,inputRef.current.value,e)} />
                    <button onClick={()=>changeFocus()}>Edit</button>
                    <button onClick={()=>props.completeTodo(i.id)}>Complete</button>
                    <button onClick={()=>props.removeTodo(i.id)}>Delete</button>
                  </li>)
                })
              }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps ,mapDispatchToProps)(Todos );
