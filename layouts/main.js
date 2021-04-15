import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import Head from 'next/head'
import Header from './main_header'
import Footer from './main_footer'

// Layout
export default function Layout(props) {
  return (
      <React.Fragment>
        <Head>
          <title>{props.title}</title>
        </Head>
        <Header header={props.header} />
        <div className="container">
          <h3 className="my-3 text-primary text-center">{props.title}</h3>
          {props.children}
        </div>
        <Footer footer="footer" />
      </React.Fragment>
  )
}