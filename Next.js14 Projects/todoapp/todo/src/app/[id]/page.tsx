
import { fetchGetData } from "../server"
import CreateData from "../CreateData"
import Updatedata from "../Updatedata"

const Update=async({params}:{params:{id:string}})=>{

    const item=await fetchGetData("http://127.0.0.1:8000/todos")
    console.log(item)
    console.log(params.id)
    const id1=Number(params.id)
    return(
        <div>
            <h1>Hello</h1>
            <Updatedata  id={id1}/>
        </div>
    )
}
export default Update