import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import React, {useEffect, useState} from "react";

type Props = {
  name: string
}

const IndexPage = ({ name }: Props) => {
  // const [stars, setStars] = useState(0)
  //
  // useEffect(() => {
  //   (async () => {
  //     const res  = await fetch('https://api.github.com/repos/zeit/next.js')
  //     const json = await res.json()
  //     console.log(json.stargazers_count)
  //     setStars(json.stargazers_count)
  //   })();
  // }, [])

  return (
      <React.Fragment>
        <Layout title="Home | Next.js + TypeScript Example">
          <h1>Hello Next.js 👋</h1>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>User: {name}</p>
        </Layout>
      </React.Fragment>
  )
}

// ServerSideで処理させる場合
export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/nagi125')
  const json = await res.json()

  return {
    props: {
      name: json.login,
    },
  }
}

export default IndexPage
