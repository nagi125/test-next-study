import Link from "next/link";
import React from "react";

const Header: React.VFC = () => {
  return (
      <React.Fragment>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
              <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/users">
              <a>Users List</a>
            </Link>{' '}
            | <a href="/api/users">Users API</a>
          </nav>
        </header>
      </React.Fragment>
  )
}

export default Header