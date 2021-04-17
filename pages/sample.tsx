import Layout from '../layouts/Layout'
import React from "react";

const Sample = () => {

  const Alert = () => {
    console.log(process.env.HOGE)
  }

  return (
      <React.Fragment>
        <Layout title="Home | Next.js + TypeScript Example">
          <button className="btn btn-success" onClick={Alert}>test</button>
        </Layout>
      </React.Fragment>
  )
}

export default Sample
