'use server'
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const CloudinaryFav=async (publicid1:string,tagfav:boolean)=>{
    if(tagfav){
        console.log("remove")
        await cloudinary.v2.uploader.remove_tag('favourite',[publicid1])
        revalidatePath("/Gallery/Favourite")
    }
    else{
        console.log("Add")
        await cloudinary.v2.uploader.add_tag('favourite',[publicid1])
        
        revalidatePath("/Gallery/Favourite")
        
        

    }
    await new Promise((resolve)=>{setTimeout(resolve,1000)})
    // revalidatePath(path)

}

export const addlocationofimage=async(image:string,addAlbum:string)=>{
    
    const existingfolder=await cloudinary.v2.api.create_folder(addAlbum);
    let parts=image.split('/')
    if(parts.length>1){
        parts=parts.slice(1)
    }
    const image_id=parts.join('/')
    await cloudinary.v2.uploader.rename(
        image,`${addAlbum}/${image_id}`
    )
}