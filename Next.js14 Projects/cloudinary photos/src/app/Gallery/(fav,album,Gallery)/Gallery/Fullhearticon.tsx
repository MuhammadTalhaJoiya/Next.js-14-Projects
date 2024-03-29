'use client'
import {  useEffect, useState, useTransition } from 'react';
import { CloudinaryFav } from './actions';
// import HeartIcon from './HeartIcon';
import ForceRefresh from '@/components/ui/force-refresh';
import { useRouter } from 'next/navigation';

const Fullhearticon=(props:any)=>{
    const [mode,setmode]=useState<Boolean>(props.bool)
    const modechange=()=>{
        if(mode===true){
            setmode(false)
        console.log(props.bool)

            CloudinaryFav(props.publicid1,props.bool)
        }
        else{
            setmode(true)
            CloudinaryFav(props.publicid1,props.bool)
        }
    }
    return(
        <div>

                <div onClick={modechange}>
                {mode===true?<div className="absolute top-1 left-2 cursor-pointer text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>:<div className="absolute top-1 left-2 cursor-pointer text-black-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>}
                    
        </div>
       </div>
        
    )
} 
export default Fullhearticon