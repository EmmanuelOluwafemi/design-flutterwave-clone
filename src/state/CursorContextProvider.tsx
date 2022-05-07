import { createContext, ReactChild, ReactFragment, ReactPortal, useState } from "react";

type ICursor = {
    active: boolean;
};

type ICursorContext = [ICursor, React.Dispatch<React.SetStateAction<ICursor>>];

export const CursorContext = createContext<ICursorContext>([{ active: false }, () => null]);

const CursorContextProvider = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  const [cursor, setCursor] = useState<ICursor>({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;