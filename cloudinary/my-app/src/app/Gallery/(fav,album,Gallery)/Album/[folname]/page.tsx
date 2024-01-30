import { Button } from "@/components/ui/button"
import cloudinary from "cloudinary";
import { v2 } from 'cloudinary';
import Link from "next/link";
// import Addtoalbum from "./addtoalbum";
import ForceRefresh from "@/components/ui/force-refresh";
import Sidebar from "../../Gallery/sidebar";
import CllImage from "../../Gallery/Cllmage";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

const FolImage=async(props:any)=>{
    const results =await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${props.params.folname}`)
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
        <ForceRefresh/>
          <div className='bg-black text-white h-full'>
              <div className="flex ">

<Sidebar/>
   {/* <hr /> */}
  <div className=" w-full p-5 h-full">
    
      <div className="columns-3 space-y-2 gap-3 mx-auto p-3">
        
        {results.resources.map((val:any)=>{
          return <CllImage  key={val.public_id} src={val.public_id} width={val.width} height={val.height} publicid={val.public_id} tag={val.tags[0]}  path="/" /> 
        })}
      </div>
    
    
    
  </div>
  
  </div>

      </div>
      </div>
      
        
    )
}
export default FolImage

//revalidatepath,usetransition,