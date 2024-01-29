'use client'
// import HeartIcon from "./HeartIcon"
import Fullhearticon from "./Fullhearticon";
import { CldImage } from 'next-cloudinary';
import ForceRefresh from "@/components/ui/force-refresh";
import Menu from "./menu";


const CllImage =(props:any )=>{
    
    return (
        <div>
                <div className='relative break-inside-auto""break-inside-auto'>

                    <div >
                        <CldImage
                        className="rounded-md"
                        {...props}
                        alt="image
                        "
                        />
                    </div>
                    {props.tag==='favourite'?<Fullhearticon bool={true} publicid1={props.publicid} /> :<Fullhearticon bool={false} publicid1={props.publicid}/>}
                    <Menu id={props.publicid}/>
                </div>
            </div>
             
        
    )
}
export default CllImage