import React from 'react'

export default function Header(props) {
  return (
      <React.Fragment>
        <h1 className="bg-primary px-3 text-white display-4 text-right">{props.header}</h1>
      </React.Fragment>
  )
}

