import React from 'react';

import Navbar from './../../components/Navbar';

import './CartPage.scss';

class CartPage extends React.Component {
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

export default CartPage;