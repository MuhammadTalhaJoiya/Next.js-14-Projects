'use client'
import { useEffect, useState } from "react"
import { Updatetask, addtask } from "./server"
const CreateData=({text,id}:{text:string,id?:number})=>{
    const [taskdata,settaskdata]=useState("")
    return (
        <div >
            <input type="text" 
            value={taskdata}
            onChange={(e)=>{
                settaskdata(e.target.value)
            }}
            placeholder="Enter task"
            />
            {
                <button className="bg-gray-200 rounded-md p-0.5 cursor-pointer"  onClick={()=>{
                    addtask("http://127.0.0.1:8000/todos",{content:taskdata})
                    settaskdata("")
                }} >Submit</button>
            }
            
            
        </div>
    )
}
export default CreateData