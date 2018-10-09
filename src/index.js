import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PrismaCmsConnector extends Component {

  
  static contextTypes = {
    getQueryFragment: PropTypes.func.isRequired,
  }


  shouldComponentUpdate(){
    return false;
  }


  render() {


    const {
      ...other
    } = this.props;
  
    const Query = this.prepareQuery();

    return <Query 
      {...other}
    />;

  }

}