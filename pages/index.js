import React, {useEffect} from 'react'
import Layout from "../layouts/main";
import Link from "next/link"

export default function Top() {

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('hoge');
  });

  return (
      <React.Fragment>
        <Layout header="Next.js" title="Top page.">
          <div className="alert alert-primary text-center">
            <h5 className="mb-4">Welcome to next.js!</h5>
            <Link href="./other">
              <button className="btn btn-primary">go to other &gt;&gt;</button>
            </Link>
          </div>
        </Layout>
      </React.Fragment>
  )
}
