import React, { createContext, useState } from "react";

// Define the initial context values
interface ContextValues {
  isOpen: boolean;
  updateDrawerState: (newValue: boolean) => void;
}

// Create the context
export const MyContext = createContext<ContextValues>({
  isOpen: false,
  updateDrawerState: () => {},
});

// Create a provider component
export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, updateDrawerState] = useState(false);
  const handleDrawerState = (value: boolean) => {
    updateDrawerState(value);
  };

  return (
    <MyContext.Provider
      value={{ isOpen, updateDrawerState: handleDrawerState }}
    >
      {children}
    </MyContext.Provider>
  );
};
