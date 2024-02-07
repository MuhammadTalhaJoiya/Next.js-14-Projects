'use client'
import { CldImage } from "next-cloudinary"
import Sidebar from "../Gallery/sidebar"
import { useState } from "react"

const EditGenPic=(props:any)=>{
    const [transformation,setTransformation]=useState<undefined|"GenAI"|"blur"|"gray"|"pixelete"|"removeback">(undefined)
    // const GenAI=()=>{
    //     setTransformation("GenAI")
    // }
    const changestatetoremove=()=>{
        setTransformation(undefined)
    }
    const blur=()=>{
        setTransformation("blur")
    }
    const gray=()=>{
        setTransformation("gray")
    }
    const pixelete=()=>{
        setTransformation("pixelete")
    }
    const removeback=()=>{
        setTransformation("removeback")
    }
    console.log(props)
    return(
        <div>
        <div className="flex">
        <Sidebar/>
        <div>
          <h1 className="p-8 text-2xl font-bold w-full h-10 flex items-center ">Edit {props.searchParams.publicid}</h1>
          <button onClick={changestatetoremove} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">Remove</button>
          {/* <button onClick={GenAI} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">GenAI</button> */}
          <button onClick={blur} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">Blur</button>
          <button onClick={gray} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">Grayscale</button>
          <button onClick={pixelete} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">Pixelete</button>
          <button onClick={removeback} className="bg-black text-white p-4 rounded-md cursor-pointer m-5">removeBackground</button>
          <div className="flex gap-2 ml-6 mt-6">
          <CldImage
            width="400"
            height="400"
            src={props.searchParams.publicid}
            sizes="100vw"
            alt="Description of my image"
        />
        {/* {transformation==="GenAI"&&<CldImage
            src={props.searchParams.publicid}
            width="400"
            height="400"
            fillBackground
            crop="pad"  // Returns the given size with padding
            alt="genai pic"
            sizes="100vw"
        />} */}
        {transformation==="blur"&&<CldImage
            width="400"
            height="400"
            src={props.searchParams.publicid}
            blur="400"
            alt="Description of my image"
        />}
        {transformation==="gray"&&<CldImage
            width="400"
            height="400"
            src={props.searchParams.publicid}
            blur="400"
            grayscale
            alt="Description of my image"
        />}
        {transformation==="pixelete"&&<CldImage
            width="400"
            height="400"
            src={props.searchParams.publicid}
            blur="400"
            pixelate
            alt="Description of my image"
        />}
        {transformation==="removeback"&&<CldImage
            width="400"
            height="400"
            src={props.searchParams.publicid}
            removeBackground
            alt="Description of my image"
        />}
          
          </div>
          
        </div>
          
        </div>
          
        
      </div>
    )
}
export default EditGenPic