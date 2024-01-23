'use client'
import HeartIcon from "./HeartIcon"
import Fullhearticon from "./Fullhearticon";
import { CldImage } from 'next-cloudinary';
import ForceRefresh from "@/components/ui/force-refresh";

const CllImage =(props:any )=>{
    
    return (
        <div>
            <ForceRefresh/>
            
                <div className='relative break-inside-auto""break-inside-auto'>
                    <div >
                    <CldImage
                    {...props}
                    alt="image
                    "
                    />
                    </div>
                    {props.tag==='favourite'?<Fullhearticon publicid={props.publicid} tagfavourite={props.tags} path={props.path}/> : <HeartIcon publicid={props.publicid} tagfavourite={props.tags} path={props.path}/>}
                </div>
            </div>
             
        
    )
}
export default CllImage