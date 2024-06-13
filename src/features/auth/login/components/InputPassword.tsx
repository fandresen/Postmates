import { Input } from "@nextui-org/react";
import { EyeFilledIcon} from "./EyeSlashFilledIcon";
import { useState } from "react";
import { EyeSlashFilledIcon } from "./EyeFilledIcon";

interface propsT {
    className?: string;
    value:string;
    onchange : (value:string)=>void
  }

export default function InputPassword({value,onchange,className}:propsT) {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange =(newvalue:string)=>{
    onchange(newvalue)
  }

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <Input
      value={value}
        labelPlacement="inside"
        variant="bordered"
        label="Password"
        onValueChange={handleChange}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className={className}
      />
    </>
  );
}
