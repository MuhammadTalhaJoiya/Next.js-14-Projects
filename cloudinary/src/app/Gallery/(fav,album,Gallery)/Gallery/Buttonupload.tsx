'use client'
import { Button } from "@/components/ui/button"
import { CldUploadButton } from 'next-cloudinary';
import CllImage from "./Cllmage";
import { useRouter } from "next/navigation";
// import { uploadserverimage } from "./actions"
import { CldImage } from 'next-cloudinary';
import ForceRefresh from "@/components/ui/force-refresh";
import { uploadserverimage } from "./actions";



const Buttonupload=async(props:any)=>{
  
  
    return(
        <div>
          <ForceRefresh/>
            <Button asChild>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
            <CldUploadButton onUpload={(()=>{
              uploadserverimage()
            })} uploadPreset="hg75qzdw" />
              
            
              </div>
            
          </Button>
        </div>
    )
}
export default Buttonupload