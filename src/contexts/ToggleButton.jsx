import { createContext, useContext, useState } from "react";

const ToggleBtn = createContext();

function ToggleButtonProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  const close = () => setIsOpen(false);
  return (
    <ToggleBtn.Provider
      value={{
        isOpen,
        toggle,
        close,
      }}
    >
      {children}
    </ToggleBtn.Provider>
  );
}
function useToggleBtn() {
  const context = useContext(ToggleBtn);
  if (context === undefined)
    throw new Error("ToggleBtn was used outside Provider");
  return context;
}
export { ToggleButtonProvider, useToggleBtn };
