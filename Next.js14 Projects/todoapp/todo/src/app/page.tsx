import Image from "next/image";
import {fetchGetData,deletetask} from "./server"
import CreateData from "./CreateData";
import Main from "./Main";
export interface GetData{ content: string, id: number }
export default async function Home() {
  
  const gettodo:GetData[]=await fetchGetData("http://127.0.0.1:8000/todos")
  // console.log(gettodo)
  return (
    <>
    <div>Hello Todo</div>
    <CreateData text="add"/>
    <Main gttodo={gettodo}/>
    </>
    
  );
}
