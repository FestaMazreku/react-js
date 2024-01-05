import React, { useState } from "react";
import './tab.css';

const ResponsiveCard = ({ title, content }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "16px",
      margin: "8px", 
      borderRadius: "8px",
      textAlign: "center",
      background: "white",
      width: "calc(25% - 16px)", 
      boxSizing: "border-box",
      flex: "0 0 calc(25% - 16px)",
    }}
  >
    <h3>{title}</h3>
    <p
      dangerouslySetInnerHTML={{
        __html: content.replace("Instead of", "<br> Instead of"),
      }}
    />
    <button
      style={{
        marginTop: "10px",
        padding: "10px 30px", 
        border: "1px solid #3E8EDE",
        borderRadius: "6px",
        background: "white",
        color: "#3E8EDE",
      }}
    >
      Buy Now
    </button>
  </div>
);

const TabsComponent = ({ tabData }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const rowsOfCards = chunkArray(tabData[selectedTab].cards, 4);

  return (
    <div style={{ textAlign: "center", background: "#f4f4f4" }}>
      <div className="tabs-container">
        {tabData.map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`tab ${selectedTab === index ? "active" : ""}`}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {rowsOfCards.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", marginBottom: "16px" }}>
            {row.map((card, cardIndex) => (
              <ResponsiveCard key={cardIndex} title={card.title} content={card.content} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const tabsData = [
    {
      title: "Domains",
      cards: [
        { title: ".COM", content: "<b> $5.99/yr </b> Instead of $10.99 y/r" },
        { title: ".AI", content: "<b> $55.99 y/r </b> Instead of $10.99 y/r" },
        { title: ".NET", content: "<b> $7.99 y/r </b> Instead of $10.99 y/r" },
        {
          title: ".HEALTH",
          content: "<b> $7.99 y/r </b> Instead of $10.99 y/r",
        },
        {
          title: ".CO.UK",
          content: "<b> $3.99 y/r </b> Instead of $10.99 y/r",
        },
        { title: ".ORG", content: "<b> $15.99 y/r </b> Instead of $10.99 y/r" },
        { title: ".CO", content: "<b> $26.33 y/r </b> Instead of $10.99 y/r" },
        { title: ".SEA", content: "<b> $26.33 y/r </b> Instead of $10.99 y/r" },
      ],
    },

    {
      title: "Web Hosting",
    },
    {
      title: "Dedicated Servers",
    },
    {
      title: "Virtual Cloud Services",
    },
    {
      title: "WordPress Hosting",
    },
    {
      title: "Email Hosting",
    },
    {
      title: "VPS Hosting Servers",
    },
    {
      title: "Free Hosting",
    },
  ];

  return (
    <div>
      <TabsComponent tabData={tabsData} />
    </div>
  );
};

export default App;