/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CompanyListContainer from '../components/CompanyListContainer';

export default class ProviderIndexContainer extends React.Component {

  render() {

    store.dispatch({
      type: 'COMPANIES_LIST',
      companies: this.props.companies
    })    
    
    return (
      <Provider store={store}><CompanyListContainer/></Provider>
      )
  }
}
