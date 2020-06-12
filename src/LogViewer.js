import React, { Component } from 'react';
import { LogViewer } from '@equinor/videx-wellog';

import { createTracks } from './data';

import './styles.scss';

class LogViewerExample extends Component {
  componentDidMount() {
    const logController = new LogViewer({
      showLegend: true,
      horizontal: true,
    });
    const tracks = createTracks();

    logController.init(this.container).setTracks(tracks);
  }

  render() {
    return (
      <div>
        <div ref={el => { this.container = el; }} />
      </div>
    );
  }
}

export { LogViewerExample };