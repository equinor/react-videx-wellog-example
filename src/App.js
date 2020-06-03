import React, { Component } from 'react';
import { LinePlot, plot } from '@equinor/videx-wellog';
import { scaleLinear, range } from 'd3';

import './App.css';

const domain = [0, 1500];
export const data = range(domain[0], domain[1], 10).map(d => [d, Math.random()]);
const width = 500;
const height = 500;

class App extends Component {

  plotLine(){
    const canvas = document.getElementById('line-canvas');
    // domain axis scale
    const scale = scaleLinear().domain([0, 200]).range([0, width]);
  
    // create instance and set options
    const plot = new LinePlot(1, {
      scale: 'linear',
      domain: [-1, 1],
    }).setData(data);
  
    // standard
    plot.setRange([100, 0])
      .plot(canvas.getContext('2d'), scale);
  
    // change color and line style
    plot.setRange([200, 100])
      .setOption('color', 'green')
      .setOption('width', 3)
      .setOption('dash', [4, 4])
      .plot(canvas.getContext('2d'), scale);
  
    // set multiple options
    plot.setRange([300, 200])
      .setOptions({
        dash: null,
        color: 'purple',
        scale: 'log',
        domain: [0.001, 100],
        width: 4,
        defined: (y, x) => x <= 200 || x >= 240,
      })
      .plot(canvas.getContext('2d'), scale.domain([100, 500]));
  }

  componentDidMount() {
    this.plotLine();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <canvas id="line-canvas" width={width} height={height} style={{ background: 'white'}} />
        </header>
      </div>
    );
  }
}

export default App;
