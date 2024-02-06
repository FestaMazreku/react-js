import DomainPlans from "./DomainPlans";
import ToggleText from "./ToggleText";
import AboutUs from "./AboutUs";
import ThemeModal from "./ThemeModal";
import FeatureUpdates from "./FeatureUpdates";
import IconContainer from "./IconContainerView";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    date: "3.3.0 (14/05/2018)",
    button: "New",
    image: "./public/assets/images/image1.jpg",
    title: "Kevin Joe",
    body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
    buttonText: "Download",
  },

  {
    id: 2,
    date: "3.1.0 (20/05/2015)",
    button2: "Fix",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
    buttonText: "Download",
  },

  {
    id: 3,
    date: "3.1.0 (20/05/2015)",
    button3: "Improvement",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
    buttonText: "Download",
  },

  {
    id: 4,
    date: "3.3.0 (14/05/2018)",
    button: "New",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
    buttonText: "Download",
  },

  {
    id: 5,
    date: "3.1.0 (20/05/2015)",
    button2: "Fix",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
    buttonText: "Download",
  },

  {
    id: 6,
    date: "3.1.0 (20/05/2015)",
    button3: "Improvement",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
    buttonText: "Download",
  },

  {
    id: 7,
    date: "3.3.0 (14/05/2018)",
    button: "New",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "File system changed from Dokan to CBFS Host <br> Cloud Drive is now a network drive Various bug fixes <br> and stability improvements Share <br> permissions re-design and optimization <br> <br> <br>",
    buttonText: "Download",
  },

  {
    id: 8,
    date: "3.1.0 (20/05/2015)",
    button2: "Fix",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Introducing Host Cloud Drive - virtual drive <br> functionality <br> New Share options and management <br> New, more user friendly design Sync <br> optimization Various performance <br> improvements and bug fixes",
    buttonText: "Download",
  },

  {
    id: 9,
    date: "3.1.0 (20/05/2015)",
    button3: "Improvement",
    image: "path/to/your/image2.jpg",
    title: "Kevin Joe",
    body: "Added Settings for Auto Start <br> Added Update Notification <br> Speed Optimization <br> Bug Fixes <br> <br> <br>",
    buttonText: "Download",
  },
];

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <IconContainer />
      <div className="wrapper">
        {cardData.map((data, index) => (
          <FeatureUpdates key={index} {...data} />
        ))}
      </div>
      <DomainPlans />
      <ToggleText />
      <br></br>
      <AboutUs />
      <br></br>
      <button className="buttonPopup" onClick={() => setButtonPopup(true)}>
        Show popup
      </button>
      <br></br>
      <br></br>
      <ThemeModal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Theme Color</h3>
        <p> Font Color </p>
        <p> Background Color </p>
        <p> Button Color </p>
        <p> Button Border Color </p>
        <p> Button Mouseover Color </p>
      </ThemeModal>
    </div>
  );
}

export default Home;
