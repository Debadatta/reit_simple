import React from 'react';
import { connect } from 'react-redux';

import PropertyFilter from './PropertyFilter';
import HeaderActions from './HeaderActions';

import GridView from '../common/GridView';
import { dealCategories, createDealCategory } from '../../actions/categories';

import '../../styles/investPropertyMarket.css';

class InvestPropertyMarket extends React.Component {
  componentDidMount() {
    this.props.dispatch(dealCategories());
  }

  handleCategorySubmit = (params) => this.props.dispatch(createDealCategory(params));

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper invest-property-market">
          <PropertyFilter categories={this.props.categories} handleCategorySubmit={this.handleCategorySubmit}/>
          <HeaderActions/>
          <div className="row property-items">
            <div className="col-xs-12">
              <div>
                <div className="roof-cards-list ember-view">
                  <div className="row roof-cards-container">
                    <GridView/>
                  </div>
                </div>
              </div>
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
