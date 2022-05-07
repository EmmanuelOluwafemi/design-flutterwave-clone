import { useContext, useCallback } from "react";
import { CursorContext } from "state/CursorContextProvider";

const useCursorHandlers = (options: any) => {
  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  }, [setCursor]);

  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
  }, [options, toggleCursor]);

  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  }, [options, toggleCursor]);
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;