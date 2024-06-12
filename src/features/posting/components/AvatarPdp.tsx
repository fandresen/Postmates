import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface propsT{
  src : string;
}
export default function AvatarPdp({src}:propsT) {
  return (
    <>
     <Avatar>
          <img src={src} alt="Author" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    </>
  )
}
