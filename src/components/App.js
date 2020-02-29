import React from 'react';
import Header from "./Header";
import ConfigurationTable from "./ConfigurationTable";
import ConfigFilePreview from "./ConfigFilePreview";
import Footer from "./Footer";
import Annotations from "./configurations/Annotations";
import '../App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <Header/>
          <ConfigurationTable>
            <Annotations/>
          </ConfigurationTable>
          <ConfigFilePreview/>
          <Footer/>
        </div>
    )
  }
}

export default App;
