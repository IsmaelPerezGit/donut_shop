import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShopList from './components/ShopList'


export class App extends Component {

  render() {
    return (
      <div>
        <ShopList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators( dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
