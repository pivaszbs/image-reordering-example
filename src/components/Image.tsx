import React from 'react'

export const Image = ({ src, ...props }) => {
  return (
    <>
        <img src={src} {...props} style={{ ...props.style, WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }} />
    </>
  )
}

