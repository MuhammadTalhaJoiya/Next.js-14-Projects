import { Button } from "@/components/ui/button"
// import Buttonupload from "../Gallery/Buttonupload";
import cloudinary from "cloudinary";
import { v2 } from 'cloudinary';
import CllImage from "../Gallery/Cllmage";
import Link from "next/link";
import Sidebar from "../Gallery/sidebar";
import ALbumCard from "./AlbumCard";
type albumtype={
  name:string,
  path:string
}
const Favourite=async()=>{
    const results =await cloudinary.v2.api.root_folders()
    console.log(results.folders)
    return(
      <div>
        <div className="flex">
        <Sidebar/>
        <div>
          <h1 className="p-8 text-2xl font-bold w-full h-10 flex items-center ">Album</h1>
          <div className="grid grid-cols-3 gap-3 p-3">
          {results.folders.map((val:any)=>{
          return <ALbumCard key={val.path} foldername={val.name}/>
            })}
        </div>
        </div>
          
        </div>
          
        
      </div>
      
    )
}
export default Favourite