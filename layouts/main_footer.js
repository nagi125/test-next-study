import React from 'react'

export default function Footer(props) {
  return (
      <React.Fragment>
        <div className="text-center h6 my-4">
          <div>{props.footer}</div>
        </div>
      </React.Fragment>
  )
}
