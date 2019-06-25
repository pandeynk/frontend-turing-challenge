import React from 'react';

import Navbar from './../../components/Navbar';

import './ItemPage.scss';

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    )
  }
}

export default ItemPage;