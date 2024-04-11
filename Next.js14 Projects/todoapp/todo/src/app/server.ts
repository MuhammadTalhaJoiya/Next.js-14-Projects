"use server"

import { revalidateTag } from "next/cache"

export const fetchGetData=async(url:string)=>{
    const data=await fetch(url,{
        next:{
            tags:["task"],
        }
    })
    const res=await data.json()
    return res
}
export const addtask=async(url:string,dataa:any)=>{
    let tasktodo=await fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(dataa)
    })
    revalidateTag("task")
    return "Task added"
}

export const deletetask=async(url:string,data:any)=>{
    let tasktodo=await fetch(url,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    })
    revalidateTag("task")
    return "Task deleted"
}
export const Updatetask=async(url:string,data:any)=>{
    let tasktodo=await fetch(url,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    })
    revalidateTag("task")
    return "Task Updated"
}