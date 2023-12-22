import React from "react";
import Card from "./Card";

const MainComponent = () => {
  const cardsData = [
    {
      title: "Card 1",
      description: "This is the first card.",
      backgroundColor: "#e57373", 
    },
    {
      title: "Card 2",
      description: "This is the second card.",
      backgroundColor: "#81c784", 
    },
    
  ];

  return (
    <div className="wrapper">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  );
};

export default MainComponent;
