import React, { Component } from 'react';
import { LinePlotExample } from './LinePlot';
import { LogViewerExample } from './LogViewer';
import './styles.scss';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>A log viewer example with multiple tracks</p>
          <LogViewerExample />
          <p>A simple example to show off plotting various lines</p>
          <LinePlotExample />
        </header>
      </div>
    );
  }
}

export default App;
