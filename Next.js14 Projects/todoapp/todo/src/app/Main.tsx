'use client'
import { deletetask } from "./server"
import { GetData } from "./page"
import Link from "next/link"
const Main=({gttodo}:{gttodo:GetData[]})=>{
    console.log(gttodo)
    console.log("asd")
    return (
        <>
            {gttodo&&gttodo.map((todo:GetData)=>{
        return <div key={todo.id} className="flex w-[25%] mb-2">
          id:{todo.id}:{todo.content}

          <button className="bg-gray-200 rounded-md p-0.5 px-1 cursor-pointer ml-3" onClick={()=>{
            deletetask(`http://127.0.0.1:8000/todos/${todo.id}`,{content:todo.content,id:todo.id})
          }}>Delete</button>
          <Link href={`/${todo.id}`}>Update</Link>
        </div>
    })}
        </>
    )
        
}
export default Main