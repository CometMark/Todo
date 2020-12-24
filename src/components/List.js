import React,{useState}   from "react";
import "./List.css";

const List=(props)=>{
 
   
return(
    <React.Fragment>

    <form  onSubmit={props.submitHandler} className="form_content" >
    {<input placeholder="Create a new todo..." 
    maxLength="90" type="text"
     onChange={props.task}
      value={props.inputTask} size="70" className="inputTask" />}
    <button disabled={!props.inputTask}
     type="submit" 
     className={props.inputTask ? `${"btn"}` : `${"disBtn"}`} >Add</button>
    </form>

    <div className="list" >
    {props.toDoList.map((lol,index)=>
    <div className="main"  key={index}  >
    <div className="single_task" >  
    <input unchecked type="checkbox" className="check"  style={{"margin":"0 10px 0px 0"}} />
    <label style={{"position":"relative","bottom":"2px"}} >{lol}</label>
    </div>
    <p onClick={()=>props.delHandler(index)}>✕</p>
    </div>
    )}
     
     <div class="last_column" >
    <p style={{"padding":"10px 15px 15px 15px",
    "margin":"10px 0 10px 0",
    "fontWeight":"700",
    "fontSize":"12px",
    "color":"hsl(234, 21%, 29%)"}} >
     {props.toDoList.length+" items left"}</p> 
     </div>

    </div>
    </React.Fragment>
)
}

export default List;