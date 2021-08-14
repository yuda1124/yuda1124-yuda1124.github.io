import React, { createContext, useState, ReactNode } from 'react';
import { PRIMARY_COLOR } from '../types';

type TPrimaryColorContext = {
  primaryColor: PRIMARY_COLOR;
  setPrimaryColor: React.Dispatch<React.SetStateAction<PRIMARY_COLOR>>;
};

const PrimaryColorContext = createContext<TPrimaryColorContext>({} as TPrimaryColorContext);

type PrimaryColorContextProviderProps = {
  children: ReactNode;
};

const PrimaryColorContextProvider = ({ children }: PrimaryColorContextProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState<PRIMARY_COLOR>(PRIMARY_COLOR.PURPLE);
  return (
    <PrimaryColorContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
      }}>
      {children}
    </PrimaryColorContext.Provider>
  );
};

export { PrimaryColorContextProvider, PrimaryColorContext };
