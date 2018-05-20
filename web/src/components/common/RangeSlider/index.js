import React from 'react';

import './index.css';

export default class RangeSlider extends React.Component {
  render() {
    return (
      <div className="ui-slider range fill">
                  <div className="slider slider-horizontal" >
                    <div className="slider-track">
                      <div className="slider-track-low" style={{left: 0, width: '0%'}} />
                      <div className="slider-selection" style={{left: '0%', width: '100%'}} />
                      <div className="slider-track-high" style={{right: 0, width: '0%'}} />
                    </div>
                    <div className="tooltip tooltip-main top hide" role="presentation" style={{left: '50%', marginLeft: '-55.5px'}}>
                      <div className="tooltip-arrow" />
                      <div className="tooltip-inner">25000 : 300000</div>
                    </div>
                    <div className="tooltip tooltip-min top hide" role="presentation" style={{left: '0%', marginLeft: '-22.5px'}}>
                      <div className="tooltip-arrow" />
                      <div className="tooltip-inner">25000</div>
                    </div>
                    <div className="tooltip tooltip-max top hide" role="presentation" style={{left: '100%', marginLeft: '-26.5px'}}>
                      <div className="tooltip-arrow" />
                      <div className="tooltip-inner">300000</div>
                    </div>
                    <div className="slider-handle min-slider-handle round" role="slider" aria-valuemin={25000} aria-valuemax={300000} aria-valuenow={25000} tabIndex={0} style={{left: '0%'}} />
                    <div className="slider-handle max-slider-handle round" role="slider" aria-valuemin={25000} aria-valuemax={300000} aria-valuenow={300000} tabIndex={0} style={{left: '100%'}} />
                  </div>
                </div>
    )
  }
}
