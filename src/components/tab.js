import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <h1>React Tabs Example</h1>

      <Tabs>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <h2>{tab} Content</h2>
            <p>This is the content for {tab}.</p>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default App;
