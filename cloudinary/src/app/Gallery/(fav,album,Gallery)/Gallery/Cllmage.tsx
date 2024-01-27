'use client'
import HeartIcon from "./HeartIcon"
import Fullhearticon from "./Fullhearticon";
import { CldImage } from 'next-cloudinary';
import ForceRefresh from "@/components/ui/force-refresh";
import Menu from "./menu";
import { Suspense } from "react";


const CllImage =(props:any )=>{
    
    return (
        <div>
                <div className='relative break-inside-auto""break-inside-auto'>
                    <div >
                    <Suspense fallback={<p>Loading feed...</p>}>
                        <CldImage
                        className="rounded-md"
                        {...props}
                        alt="image
                        "
                        />
                    </Suspense>
                    </div>
                    {props.tag==='favourite'?<Fullhearticon publicid={props.publicid} tagfavourite={props.tags} path={props.path}/> : <HeartIcon publicid={props.publicid} tagfavourite={props.tags} path={props.path}/>}
                    <Menu id={props.publicid}/>
                </div>
            </div>
             
        
    )
}
export default CllImage