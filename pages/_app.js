import React from "react";
import withRedux from "next-redux-wrapper";

import { makeStore } from "../src/store";

class myApp extends React.Component {
  static async getInitialProps({ Component, ctx}){
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps } 
  }
  render () {
    const { Component, pageProps} = this.props;
    return (
      <Component {...pageProps} />
    )
  }
}
export default withRedux(makeStore)(myApp);