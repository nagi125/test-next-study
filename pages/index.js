import React, {useState, useEffect} from 'react'
import Layout from "../layouts/main";
import Link from "next/link"
import axios from 'axios';

export default function Top() {

  const [user, setUser] = useState('');

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://api.github.com/users/nagi125')
      console.log(res.data)
      setUser(res.data)
    })();
  }, []);

  return (
      <React.Fragment>
        <Layout header="Next.js" title="Top page.">
          <div className="alert alert-primary text-center">
            <h5 className="mb-4">Welcome to next.js!</h5>
            <p className="text-success">{user.login}</p>
            <Link href="./other">
              <button className="btn btn-primary">go to other &gt;&gt;</button>
            </Link>
          </div>
        </Layout>
      </React.Fragment>
  )
}
