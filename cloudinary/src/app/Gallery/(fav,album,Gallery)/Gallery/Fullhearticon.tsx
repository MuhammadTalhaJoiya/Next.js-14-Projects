'use client'
import {  useState, useTransition } from 'react';
import { CloudinaryFav } from './actions';
import HeartIcon from './HeartIcon';
import ForceRefresh from '@/components/ui/force-refresh';

const Fullhearticon=(props:any)=>{
    const [Transition,setTransition]=useTransition()
    const [mode,setMode]=useState(true)
    const onclickFunc=()=>{
        setTransition(()=>{
            CloudinaryFav(props.publicid,mode,props.path)
            setMode(false)
        })

    }
    
    
    return(
        <div>
    <ForceRefresh/>

                <div onClick={onclickFunc}>
                {mode===true?<div className="absolute top-1 right-2 cursor-pointer text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>:<HeartIcon publicid={props.publicid} tagfavourite={mode}/>}
                    
        </div>
       </div>
        
    )
} 
export default Fullhearticon