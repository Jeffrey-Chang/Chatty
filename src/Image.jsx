import React from 'react'

const Image = ({ index, url }) => {
  return (
    <img key={index} src={url} className="limited-width" />
  )
}

export default Image