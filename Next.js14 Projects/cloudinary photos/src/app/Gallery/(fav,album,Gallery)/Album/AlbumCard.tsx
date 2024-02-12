
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
const ALbumCard=(props:any)=>{
    return(
        <div>
                

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.foldername}</CardTitle>
        <CardDescription>Display your images related to you album</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button ><Link href={`/Gallery/Album/${props.foldername}`}> See Album</Link></Button>
      </CardFooter>
    </Card>

        </div>
    )
}
export default ALbumCard