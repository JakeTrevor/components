import { FC, useEffect, useRef } from "react";

interface props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

let ResizingInput: FC<props> = ({ value, setValue, ...rest }) => {
  let ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};

export default ResizingInput;
