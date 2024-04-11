'use client'
import React, { useState } from 'react'
import { Updatetask} from "./server"

function Updatedata({id}:{id:number}) {
    const [taskdata,settaskdata]=useState("")
    console.log(id)
  return (
    <div>
      <input type="text" 
            value={taskdata}
            onChange={(e)=>{
                settaskdata(e.target.value)
            }}
            placeholder="Enter Updated task"
            />
                <button className="bg-gray-200 rounded-md p-0.5 cursor-pointer"  onClick={()=>{
                    Updatetask(`http://127.0.0.1:8000/todos/${id}`,{content:taskdata,id:id})
                    settaskdata("")
                }} >Update</button>
            
    </div>
  )
}

export default Updatedata
