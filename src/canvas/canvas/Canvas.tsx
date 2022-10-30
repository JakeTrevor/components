import React, {
  FC,
  ReactNode,
  createContext,
  useRef,
  useState,
  useEffect,
} from "react";

interface props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  children: ReactNode;
}

interface canvasContext {
  ref: React.RefObject<HTMLCanvasElement> | undefined;
}

const defaultContext: canvasContext = { ref: undefined };

export const CanvasContext = createContext<canvasContext>(defaultContext);

// * Component:
let Canvas: FC<props> = ({ children, ...rest }) => {
  //   rest["id"] = rest.id || "ReactCanvas";
  let [ctx, setCTX] = useState<canvasContext>(defaultContext);
  let canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setCTX({
      ...ctx,
      ref: canvasRef,
    });
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} {...rest} />
      <CanvasContext.Provider value={ctx}>{children}</CanvasContext.Provider>
    </>
  );
};

export default Canvas;
