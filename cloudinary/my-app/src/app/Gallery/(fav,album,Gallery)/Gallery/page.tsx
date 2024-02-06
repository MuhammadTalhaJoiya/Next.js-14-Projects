import { Button } from "@/components/ui/button"
import Buttonupload from "../Gallery/Buttonupload";
import cloudinary from "cloudinary";
import { v2 } from 'cloudinary';
import CllImage from "../Gallery/Cllmage";
import Link from "next/link";
import Sidebar from "./sidebar";
// import Addtoalbum from "./addtoalbum";
import ForceRefresh from "@/components/ui/force-refresh";
// import { SearchForm } from "./search-form";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
// import { useEffect } from "react";
export default async function Favourite(){
  const search=undefined
    const results =await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
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
          <div className='bg-black text-white h-full'>
              <div className="flex ">

<Sidebar/>
  <div className=" w-full p-5 h-full">
  <div className="flex justify-between p-5">
              <h1 className="text-2xl font-bold">Gallery</h1>
              {/* <SearchForm initialSearch={search} /> */}
              <Buttonupload/>
          </div>
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

//revalidatepath,usetransition,