import { FC, useContext, useEffect } from "react";

import { CanvasContext } from "../Canvas/Canvas";

interface props {
  centre: { x: number; y: number };
  radius: number;
}

let Circle: FC<props> = ({ centre: { x, y }, radius }) => {
  let ctx = useContext(CanvasContext);
  useEffect(() => {
    if (ctx.ref?.current) {
      let canvas = ctx.ref.current;
      let cctx = canvas.getContext("2d");
      if (!cctx) return;
      cctx.beginPath();
      cctx.arc(x, y, radius, 0, 2 * Math.PI);
      cctx.fill();
    }
  });
  return <></>;
};

export default Circle;
