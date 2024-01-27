'use server'
import cloudinary from "cloudinary";

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


export const addlocationofimage=async(image:string,addAlbum:string)=>{
    const existingfolder=await cloudinary.v2.api.create_folder(addAlbum);
    await cloudinary.v2.uploader.rename(
        image,`${addAlbum}/${image}`
    )
}