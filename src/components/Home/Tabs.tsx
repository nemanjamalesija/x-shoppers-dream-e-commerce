import { useState, useEffect } from 'react';
import useObserver from '../../helpers/useObserver';
import { useProductsContext } from '../../productsContext';
import { tabsContent } from '../../utils/tabsContent';
import './tabs.css';

const Tabs = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { tabsRef } = useProductsContext();
  const { sectionObserver, isObserving } = useObserver();

  const tabsObserver = sectionObserver();

  useEffect(() => {
    if (!tabsRef.current) return;

    setIsHidden(true);
    tabsObserver.observe(tabsRef.current);

    return () => tabsObserver.disconnect();
  }, [tabsRef, isObserving, tabsObserver]);

  return (
    <section
      className={`${
        isHidden
          ? 'section-tabs section--hidden section-tansform '
          : 'section-tabs'
      }`}
      ref={tabsRef}
    >
      <div className="container-tabs">
        <header>
          <h3 className="heading-tertiary heading-tertiary-align-start">
            Operations
          </h3>
          <p className="heading-tertiary-paragraph">
            Find your perfect piece where simplicity meets efficiency.
          </p>
        </header>
        <div className="tabs-component">
          <div className="tabs-btns-container">
            {tabsContent.map((tab, i) => {
              return (
                <button
                  key={i}
                  className={`${
                    activeTabIndex === i
                      ? `btn-tabs btn-tab-${i} btn-tabs-active`
                      : `btn-tabs btn-tab-${i}`
                  }`}
                  onClick={() => setActiveTabIndex(i)}
                >
                  <span>{tab.button}</span>
                </button>
              );
            })}
          </div>
          <div className="container-tab-content">
            <div className="tabs-icon-div">
              <span>{tabsContent[activeTabIndex].icon}</span>
            </div>
            <h3 className="tab-content-heading">
              {tabsContent[activeTabIndex].heading}
            </h3>
            <p className="tab-content-paragraph">
              {tabsContent[activeTabIndex].paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
