import { createContext, useState } from "react";
export const ActiveAndChangeActive = createContext(null);

const Context = ({ children }) => {
  // it can contian 1 | 2 | 3 | 4 | 5
  const [currentActivePage, setCurrentActivePage] = useState(1);
  return (
    <>
      <ActiveAndChangeActive.Provider
        value={{ currentActivePage, setCurrentActivePage }}
      >
        {children}
      </ActiveAndChangeActive.Provider>
    </>
  );
};

export default Context;
