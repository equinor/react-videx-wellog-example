import React, { Component } from 'react';
import { scaleLinear } from 'd3';
import {
  LinePlot,
} from '@equinor/videx-wellog';

import { ex1 } from './data';

const width = 800;
const height = 600;

class LinePlotExample extends Component {
  plotLine(){
    const canvas = this.container;
    // domain axis scale
    const scale = scaleLinear().domain([0, 200]).range([0, width]);
  
    // create instance and set options
    const plot = new LinePlot(1, {
      scale: 'linear',
      domain: [-1, 1],
    }).setData(ex1);
  
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
    return (<canvas ref={el => { this.container = el; }} width={width} height={height} style={{ background: 'white'}} />);
  }
}

export { LinePlotExample };