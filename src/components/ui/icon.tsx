import { Button } from "@/components/ui/button"

interface propsT {
    src:string;
    className?:string;
    
}
export function ButtonIcon({src,className}:propsT) {
  return <Button variant="ghost"><img src={src} alt="icon" className={className} /></Button>
}
