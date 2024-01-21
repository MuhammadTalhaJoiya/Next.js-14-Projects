'use server'
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export const CloudinaryFav=async (publicid1:string,tagfav:boolean,path:string)=>{
    if(tagfav){
        // console.log("remove")
        await cloudinary.v2.uploader.remove_tag('favourite',[publicid1])

    }
    else{
        console.log("Add")
        await cloudinary.v2.uploader.add_tag('favourite',[publicid1])
        
        
        

    }
    await new Promise((resolve)=>{setTimeout(resolve,1000)})
    // revalidatePath(path)

}
export const uploadserverimage=()=>{setTimeout(() => {
    const router= useRouter()

    router.refresh()
      
    }, 3000)};