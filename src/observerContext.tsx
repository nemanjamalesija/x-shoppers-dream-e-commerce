import React, { useState, useContext, useRef } from 'react';

const ObserverContext = React.createContext({} as any);

const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
  const [isObserving, setisObserving] = useState(false);
  const navRef = useRef(null);

  const sectionObserverCallback = React.useCallback(function (entries: any) {
    const [entry] = entries;
    setisObserving(true);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
  }, []);

  const sectionObserver = React.useCallback(() => {
    return new IntersectionObserver(sectionObserverCallback, {
      root: null,
      threshold: 0.15,
    });
  }, [sectionObserverCallback]);

  return (
    <ObserverContext.Provider value={{ navRef, sectionObserver, isObserving }}>
      {children}
    </ObserverContext.Provider>
  );
};

export const useObserverContext = () => {
  return useContext(ObserverContext);
};

export { ObserverContext, ObserverProvider };
