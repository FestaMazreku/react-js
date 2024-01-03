import "./App.css";
import useStateComponent from './components/usestate'; 
import Component from "./components/component";
import Card from "./components/card";
import Tab from './components/tab';

function App() {
  const cardData = [
  
    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "./images/image1.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
      buttonText: "Download",
    },

    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
      buttonText: "Download",
    },

    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
      buttonText: "Download",
    },
  ];

  return (
    <div className="App">
      <Component />
      <div className="wrapper">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
      <Tab />
      <useStateComponent />
    </div>
  );
}

export default App;