import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import store from '../redux/store';
import CompanyShow from './CompanyShow';

class CompanyShowContainer extends React.Component {

  render() {
    
    return (<CompanyShow company={this.props.company} />)
  }
}

const mapStateToProps = function(store) {
  return {
    company: store.company
  }
}

export default connect(
  mapStateToProps
)(CompanyShowContainer);