import { useState, useEffect } from 'react';
import useObserver from '../../helpers/useObserver';
import { useRefsContext } from '../../refsContext';
import { tabsContent } from '../../utils/tabsContent';
import './tabs.css';

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { tabsRef } = useRefsContext();
  const { sectionObserver, isObserving } = useObserver();

  const tabsObserver = sectionObserver();

  useEffect(() => {
    if (!tabsRef.current) return;

    tabsObserver.observe(tabsRef.current);

    return () => tabsObserver.disconnect();
  }, [tabsRef, isObserving, tabsObserver]);

  return (
    <section
      className={`${
        isObserving
          ? 'section-tabs section-tansform'
          : 'section-tabs section-tansform section--hidden '
      }`}
      ref={tabsRef}
    >
      <div className="container-tabs">
        <header className="tabs-header">
          <h3 className="heading-tertiary heading-tertiary-align-start">
            Operations
          </h3>
          <h4 className="heading-fourth">
            Where simplicity meets efficiency to bring your home to life.
          </h4>
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
