import React,{useState} from 'react';
import List from "../components/List";
import  "./Home.css";

const Home=()=>{
    const[inputTask,setInputTask]=useState();
    const[arr,setArr]=useState([]);
    const[theme,setTheme]=useState(true);
    
const task=(event)=>{
setInputTask(event.target.value);
}
const submitHandler=(event)=>{
    setArr([...arr,inputTask]);
    event.preventDefault();
    setInputTask("");
}
const delHandler=(index)=>{
const list=[...arr];
list.splice(index,1);
setArr(list);
}



return(<div >
    <div style={{"display":"inline-flex"}} >  
    <h1 className="head" >T O D O</h1>
    </div>
    
    <List toDoList={arr} 
    delHandler={(index)=>delHandler(index)}
     submitHandler={submitHandler}
      task={task} 
      inputTask={inputTask} />
</div>
)
}

export default Home;