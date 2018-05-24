import React from 'react';
import { connect } from 'react-redux';

import PropertyFilter from './PropertyFilter';
import HeaderActions from './HeaderActions';

import GridView from '../common/GridView';
import ListView from '../common/ListView';

import { dealCategories, createDealCategory } from '../../actions/categories';

import '../../styles/investPropertyMarket.css';

class InvestPropertyMarket extends React.Component {
  state = { view: 'grid' };

  componentDidMount() {
    this.props.dispatch(dealCategories());
  }

  handleCategorySubmit = (params) => this.props.dispatch(createDealCategory(params));
  onViewChange = (view, e) => {
    e.preventDefault();
    this.setState({ view });
  }

  header = [
    { column: 'image', title: '' },
    { column: 'address', title: 'Address' },
    { column: 'price', title: 'Price' },
    { column: 'netProfit', title: 'Net Profit' },
    { column: 'roi', title: 'ROI' },
    { column: 'annualTurn', title: 'Annual Turn' },
    { column: 'annualizedROI', title: 'Annualized ROI' },
    { column: 'sellerRating', title: 'Seller Rating' },
    { column: 'dealRating', title: 'Deal Rating' },
    { column: 'symbol', title: '' },
    { column: 'blank', title: '' },
    { column: 'actions', title: '' },
  ];

  renderHeaderCell = (obj) => {
    switch(obj.column) {
      case 'image':
        return <th key={obj.column} className="image-column list-view__cell"></th>;
      case 'address':
        return <th key={obj.column} className="address head text-left list-view__cell">{obj.title}</th>;
      case 'price':
      case 'netProfit':
      case 'roi':        
      case 'annualTurn':
      case 'annualizedROI':
      case 'sellerRating':
      case 'dealRating':
        return (
          <th key={obj.column} className="list-view__cell">
            <span className="sortable">
              {obj.title}
            </span>            
          </th>
        )
      default: 
        return null;
    }
  }

  renderListCell = (obj) => {
    switch(obj.column) {
      case 'image':
        return (
          <td className="image-column roof-category-coding-row" key={obj.column}>
            <div className="roof-category-coding-cell offer"></div>
            <div className="roof-photo-primary-small">
              <div className="roof-photo">
                <a title="See Details" href="/investment-property-details/detroit-michigan/96-ahrens-st-mount-clemens-48043/1665781" >
                  <img src="https://roofstock-cdn.azureedge.net/public/properties/1665781/photo/2e89e83d-dee9-4f1c-b167-56c88f9163e9_1-_Front-modified-20181416142837_320.jpg" alt="investment property - 96 Ahrens St, Mount Clemens, MI 48043, Macomb - main image" className="profile-icon profile-icon-small" />
                </a>
              </div>
            </div>
          </td>
        );
      case 'address':
        return (
          <td className="roof-pull-left cell text-left" key={obj.column}>
            <a title="View Roof Details" href="/investment-property-details/detroit-michigan/96-ahrens-st-mount-clemens-48043/1665781" className="with-hover ">96 Ahrens St
              <div className="city-state-zip">
                Mount Clemens, MI 48043
              </div>
            </a>
            <div>
              <div className="open-house-indicator __f12e6 as-block ">
                <span className="indicator">Open House</span>
              </div>
            </div>
          </td>
        )
      case 'price':
        return (
          <td style={{whiteSpace: 'normal'}} key={obj.column}>
            <span className="symbol-dollar">$</span>135,000<br/>
          </td>
        );
      case 'netProfit':
        return (
          <td key={obj.column}>
            <span className="symbol-dollar">$</span>2,650
            <span className="hidden-print">
            </span>
          </td>
        );
      case 'roi': 
        return <td key={obj.column}>23.6<span className="symbol-percent">%</span></td>;    
      case 'annualTurn':
        return <td key={obj.column}>12.1<span className="symbol-percent">%</span></td>;
      case 'annualizedROI':
        return <td key={obj.column}><span className="symbol-dollar">$</span>54,915</td>;
      case 'sellerRating':
        return <td key={obj.column}>25.5<span className="symbol-percent">%</span></td>;
      case 'dealRating':
        return <td key={obj.column} className="cell">1897</td>;
      case 'symbol':
        return (
          <td key={obj.column} className="action-column text-center">
            <span>
              <a href="#" title="Click to save this property." className="roof-action-save">
                <i className="fal fa-heart"></i>
              </a>
            </span>
          </td>
        );
      case 'blank':
        return <td key={obj.column}><span></span></td>;
      case 'actions':
        return (
          <td key={obj.column} className="action-column text-center roof-details-link">
            <a title="View Roof Details" href="/investment-property-details/detroit-michigan/96-ahrens-st-mount-clemens-48043/1665781" className="btn btn-fixed-size roof-action-view btn-secondary">See Details
            </a>
          </td>
        );
      default: 
        return null;
    }           
  }

  renderView() {
    if (this.state.view === 'grid') {
      return <GridView/>;
    }

    return (
      <ListView 
        header={this.header}
        renderHeaderCell={this.renderHeaderCell}
        renderListCell={this.renderListCell}
      />
    );
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper invest-property-market">
          <PropertyFilter categories={this.props.categories} handleCategorySubmit={this.handleCategorySubmit}/>
          <HeaderActions onViewChange={this.onViewChange} view={this.state.view}/>
          <div className="row property-items">
            <div className="col-xs-12">
              {this.renderView()}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  const categories = Object.values(state.entities.dealCategories);

  return { categories: [{name: 'All', id: 'all'}, ...categories] };
}

export default connect(mapStateToProps)(InvestPropertyMarket);
