import { Button } from "@/components/ui/button"
import Buttonupload from "../Gallery/Buttonupload";
import cloudinary from "cloudinary";
import CllImage from "../Gallery/Cllmage";
import Link from "next/link";
import ForceRefresh from "@/components/ui/force-refresh";
import Sidebar from "../Gallery/sidebar";
import Addtoalbum from "../Gallery/addtoalbum";
const Favourite=async()=>{
    const results =await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .with_field('tags')
  .max_results()
  .execute()
  
  // .then(result=>console.log(result));
  console.log(results.resources)
  console.log(results.resources.length)
  // console.log(results.resources.public_id)
    return(
      <div>
      {/* <ForceRefresh/> */}
      <div className="flex p-5">
      <Sidebar/>

        <div className=" w-full p-5 h-full">
          <div className="flex justify-between p-5">
              <h1 className="text-2xl font-bold">Gallery</h1>
              <Buttonupload />
          </div>
          <div className="grid grid-cols-10 gap-4 ">
          {results.resources.map((val:any)=>{
            if(val.tags[0]==='favourite'){
                return <CllImage key={val.public_id} src={val.public_id} width={val.width} height={val.height} publicid={val.public_id} tag={val.tags[0]} path="/Gallery/Favourite"/> 

            }
          })}
        </div>
          
          
        </div>
        
        
        </div>
      </div>
        
    )
}
export default Favourite

//next router cache the date at the client side by default when the page is render on server