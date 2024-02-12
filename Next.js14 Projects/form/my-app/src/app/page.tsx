'use client'

import Link from "next/link"
import { useState } from "react"
import Form from "./form/page"

export default function Home() {
  // const [name,setname]=useState<string>("")
  // const [email,setemail]=useState<string>("")
  // const [text,settext]=useState<string>("")
// const nameonchange=(e:{target:{value:string,name:string}})=>{
//   console.log("console",e.target.name)

//   setname(e.target.value)
// }
// const emailonchange=(e:{target:{value:string,name:string}})=>{
//   console.log("console",e.target.name)

//   setemail(e.target.value)
  
// }
// const textonchange=(e:{target:{value:string,name:string}})=>{
//   console.log("console",e.target.name)

//   settext(e.target.value)
// }
// const oneFunc=(e:{target:{value:string,name:string}})=>{
//   if(e.target.name==="email"){
//     setemail(e.target.value)
//   }
//   else if(e.target.name==="firstName"){
//     setname(e.target.value)
//   }
//   else{
//     settext(e.target.value)
//   }
// }
type dataTypeForm={
  firstName:string,
  email:string,
  message:string
}
const [data,setData]=useState<dataTypeForm>({
    firstName:"",
    email:"",
    message:""
})
const [dataform,setdataform]=useState<dataTypeForm[]>([])
const oneFunc=(e:{target:{value:string,name:string}})=>{
    let abcdata={
      ...data,
      [e.target.name]:e.target.value
    }
    // console.log(abcdata)
    setData(abcdata)
}
const onclickHandler=()=>{
  if(!data.firstName){
    alert("Enter Name")
    return
  }
  else if(!data.email){
    alert("Enter your email")
    return
  }
  else if(!data.message){
    alert("ENter your messege")
    return

  }
  let newarrayofdata:dataTypeForm[]=[...dataform,data]
  setdataform(newarrayofdata)
  console.log(newarrayofdata)
  setData({
    firstName:"",
    email:"",
    message:""
  })
  
}

  return (
    <div>
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={oneFunc}
          value={data.firstName}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={oneFunc}
          value={data.email}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message:</label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={oneFunc}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" onClick={onclickHandler} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
    </div>
    <div>
      {dataform.map((val)=>{
        return <h1>{val.email}</h1>
      })}
    </div>
    <Form name={data.firstName} email={data.email} messege={data.message}/>
    </div>
  );
}
