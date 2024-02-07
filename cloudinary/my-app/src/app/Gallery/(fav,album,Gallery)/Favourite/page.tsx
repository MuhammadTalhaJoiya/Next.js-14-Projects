// import Buttonupload from "../Gallery/Buttonupload";
import cloudinary from "cloudinary";
import CllImage from "../Gallery/Cllmage";
import Sidebar from "../Gallery/sidebar";
// import Addtoalbum from "../Gallery/addtoalbum";
import Buttonupload from "../Gallery/Buttonupload";
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

      <div className="bg-black text-white h-full">
        
      <div className="flex p-5">

      <Sidebar/>

        <div className=" w-full p-5 h-full">
          <div className="flex justify-between p-5">
              <h1 className="text-2xl font-bold">Gallery</h1>
              <Buttonupload/>
          </div>
          <div className="columns-3 space-y-2 gap-3 mx-auto p-3">
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