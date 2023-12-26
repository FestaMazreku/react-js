import "./App.css";
import Component from "./components/component";
import Card from "./components/card";

function App() {
  const cardData = [
    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "./images/image1.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization",
      buttonText: "Download",
    },
    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimization Various performance improvements and bug fixes",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      buttonText: "Download",
    },

    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization",
      buttonText: "Download",
    },
    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimization Various performance improvements and bug fixes",
      buttonText: "Download",
    },
    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      buttonText: "Download",
    },
    {
      date: "3.3.0 (14/05/2018)",
      button: "New",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button2: "Fix",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Introducing Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimization Various performance improvements and bug fixes",
      buttonText: "Download",
    },

    {
      date: "3.1.0 (20/05/2015)",
      button3: "Improvement",
      image: "path/to/your/image2.jpg",
      title: "Kevin Joe",
      body: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
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
    </div>
  );
}

export default App;
