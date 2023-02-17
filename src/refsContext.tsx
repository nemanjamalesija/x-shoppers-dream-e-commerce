import React, { useContext, createRef, useRef } from 'react';
import { refsContextValues } from './constants/types/refsContextTypes';

const RefsContext = React.createContext<refsContextValues>({
  navRef: createRef<HTMLDivElement>(),
  heroRef: createRef<HTMLDivElement>(),
  featuredProductsRef: createRef<HTMLDivElement>(),
  creedsRef: createRef<HTMLDivElement>(),
  tabsRef: createRef<HTMLDivElement>(),
  sliderRef: createRef<HTMLDivElement>(),
});

const RefsProvider = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredProductsRef = useRef<HTMLDivElement>(null);
  const creedsRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <RefsContext.Provider
      value={{
        navRef,
        heroRef,
        featuredProductsRef,
        creedsRef,
        tabsRef,
        sliderRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  );
};

export const useRefsContext = () => {
  return useContext(RefsContext);
};

export { RefsContext, RefsProvider };
