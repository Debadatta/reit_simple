import React from 'react';

import PropertyCard from '../PropertyCard';

import './index.css';

export default class GridView extends React.Component {
  render() {
    return (
      <div>
        { [1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
          <PropertyCard key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-hg-1-5th roof-card-item ember-view"/>
          ))         
        }
      </div>
    )
  }
}