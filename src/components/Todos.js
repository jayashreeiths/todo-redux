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
      addTodo: (obj) => dispatch(addTodos(obj))
    };
  };
  
  const Todos = (props) => {
      const [todo, setTodo] = useState("");


      const handleChange = (e)=>{
       setTodo(e.target.value)
      }
      
      //console.log("props value",props);
    return (
        <div className="addTodos">
            <input type="text" onChange ={(e)=>handleChange(e)} className="todo-input" />
            <button className="add-dtn"onClick ={()=>props.addTodo({
                id:Math.floor(Math.random()*1000),
                item:todo,
                completed:false,
            })} >Add</button>
            <br />
          
        </div>
    )
}

export default connect(mapStateToProps ,mapDispatchToProps)(Todos );
