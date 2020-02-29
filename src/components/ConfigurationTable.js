import React from 'react';

class ConfigurationTable extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div id="configuration-table">
          <h1>config table</h1>
          {this.props.children}
        </div>
    );
  }
}

export default ConfigurationTable;
