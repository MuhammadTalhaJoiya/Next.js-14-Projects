'use client'
import { Button } from "@/components/ui/button"
import {addlocationofimage} from "./actions"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
const Addtoalbum=(props:any)=>{
    const [addAlbum,setaddAlbum]=useState("")
    const [image,setImage]=useState("")
    const [open, setOpen] = useState(false);
    return(
        <div onClick={()=>[
            setImage(props.id)
        ]}>
           <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add to Album</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album Name
            </Label>
            <Input
            onChange={(e)=>{
                setaddAlbum(e.currentTarget.value)
            }}
              id="name"
              defaultValue={addAlbum}
              className="col-span-3"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={()=>{
            addlocationofimage(image,addAlbum)
            setOpen(false)
          }} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </div>
    )
}
export default Addtoalbum