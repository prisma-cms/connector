import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from "@prisma-cms/context";

export default class PrismaCmsConnector extends Component {


  static contextType = Context;
  

  static propTypes = {
    getQueryFragment: PropTypes.func,
  }


  componentWillMount() {

    const Query = this.prepareQuery();

    this.Query = Query;

  }


  prepareQuery(){

    console.error("You should override prepareQuery method.");
    return null;
  }


  render() {


    const {
      ...other
    } = this.props;


    const Query = this.Query;

    if (!Query) {

      console.error("Query is null");

      return null;
    }

    return <Query
      {...other}
    />;

  }

}