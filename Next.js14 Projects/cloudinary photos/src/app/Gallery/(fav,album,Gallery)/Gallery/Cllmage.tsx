'use client'
// import HeartIcon from "./HeartIcon"
import Fullhearticon from "./Fullhearticon";
import { CldImage } from 'next-cloudinary';
import ForceRefresh from "@/components/ui/force-refresh";
import Menu from "./menu";


const CllImage =(props:any )=>{
    
    return (
        <div>
                <div className='relative break-inside-auto'>

                    <div >
                        <CldImage
                        className="rounded-md"
                        height={props.height}
                        width={600}
                        src={props.src}
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