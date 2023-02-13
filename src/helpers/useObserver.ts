import React, { useState } from 'react';

const useObserver = () => {
  const [isObserving, setisObserving] = useState(false);

  const sectionObserverCallback = React.useCallback(function (entries: any) {
    const [entry] = entries;
    setisObserving(true);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
  }, []);

  const sectionObserver = React.useCallback(() => {
    return new IntersectionObserver(sectionObserverCallback, {
      root: null,
      threshold: 0.2,
    });
  }, [sectionObserverCallback]);

  return { sectionObserver, isObserving };
};

export default useObserver;
