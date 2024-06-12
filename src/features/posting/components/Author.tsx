
interface propsT{
    name : string;
  }
export default function Author({name}:propsT) {
  return (
    <>
     <h4 className="text-sm font-semibold">{name}</h4>
    </>
  )
}
