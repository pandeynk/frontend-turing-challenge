import React from 'react';

import Navbar from './../../components/Navbar';
import HomePageHeader from './../../components/HomePageHeader';

import './HomePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HomePageHeader />
        <Navbar />
      </React.Fragment>
    )
  }
}

export default HomePage;