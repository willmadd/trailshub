import React, { useState } from 'react'
import ImageComponent from './Image.component'

const ImageContainer = (props) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  const containerFunctions = { setHasLoaded }

  const containerProps = { hasLoaded }

  return (
    <ImageComponent {...props} {...containerProps} {...containerFunctions} />
  )
}

export default ImageContainer
