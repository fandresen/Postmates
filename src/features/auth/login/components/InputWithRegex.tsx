import { Input } from "@nextui-org/input";
import { useMemo } from "react";

interface propsT {
  errorMessage: string;
  className?: string;
  value: string;
  onchange: (value: string) => void;
}
export default function InputWithRegex({
  errorMessage,
  className,
  value,
  onchange,
}: propsT) {
  const validateEmail = (value: string) =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  const handleChange = (newvalue: string) => {
    onchange(newvalue);
  };

  return (
    <>
      <Input
        value={value}
        type="email"
        label="Email"
        labelPlacement="inside"
        variant="bordered"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "default"}
        errorMessage={errorMessage}
        onValueChange={handleChange}
        className={className}
      />
    </>
  );
}
