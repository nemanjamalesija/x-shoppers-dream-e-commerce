import { useState } from 'react';

const useObserver = () => {
  const [isObserving, setisObserving] = useState(false);

  const sectionObserverOptionsObject = {
    root: null,
    threshold: 0.2,
  };

  const sectionObserverCallback = function (entries: any) {
    const [entry] = entries;
    setisObserving(true);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
  };

  const sectionObserver = () => {
    return new IntersectionObserver(
      sectionObserverCallback,
      sectionObserverOptionsObject
    );
  };

  return { sectionObserver, isObserving };
};

export default useObserver;
