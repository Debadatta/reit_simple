import React from 'react';
//import { DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <section className="content-wrapper__inner__main">
        Home page
      </section>
    );
  }
}

export default connect()(Dashboard);
