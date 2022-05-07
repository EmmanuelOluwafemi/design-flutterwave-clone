import useMousePosition from 'hooks/useMousePosition';
import { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from 'state/CursorContextProvider';
import styled from 'styled-components'

import { createPortal } from "react-dom";

// FIXME: Make follow cursor functionality work

type styleProps = {
  clientX: number,
  clientY: number
}

const cursorRoot = document.querySelector("#cursor") as HTMLElement;

const Cursor: React.FC<{}> = () => {

    const el = useRef(document.createElement("div"));

    const { clientX, clientY } = useMousePosition();
    const [cursor] = useContext(CursorContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Use this in case CRA throws an error about react-hooks/exhaustive-deps
      const current = el.current;

      // We assume `cursorRoot` exists with '!'
      cursorRoot!.appendChild(current);
      return () => void cursorRoot!.removeChild(current);
    }, []);

    useEffect(() => {
      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        document.body.removeEventListener("mouseenter",   handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
  return createPortal (
    <CustomCursor clientX={clientX} clientY={clientY}>
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          stroke: "#ccc",
          strokeWidth: 0.5,
          fill: "none",
          transform: `translate(-50%, -50%) scale(${cursor.active ? "3.5" : "2.5"})`,
          transition: "all .05s ease-in-out",
          opacity: isVisible && clientX > 1 ? 1 : 0,
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
        />
      </svg>

    </CustomCursor>,
    el.current
  )
}

export default Cursor

const CustomCursor = styled.div<styleProps>`
  position: "fixed";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
`;