import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Addtoalbum from "./addtoalbum"
const Menu=(props:any)=>{
    return(
        <div className="absolute right-2 top-1">
                            <DropdownMenu>
  <DropdownMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><Addtoalbum id={props.id}/></DropdownMenuLabel>
    <DropdownMenuSeparator />
  </DropdownMenuContent>
</DropdownMenu>
        </div>
    )
}
export default Menu