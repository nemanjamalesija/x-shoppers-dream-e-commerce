import { useState } from 'react';
import { tabsContent } from '../../utils/tabsContent';
import './tabs.css';

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="section-tabs">
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
