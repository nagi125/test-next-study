import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from "../components/_layouts/Header";
import Footer from "../components/_layouts/Footer";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      {children}
      <Footer />
    </React.Fragment>
)

export default Layout
