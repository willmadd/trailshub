import React, {useRef} from 'react'
import TrailPhotoCarouselComponent from './TrailPhotoCarousel.component'

const TrailPhotoCarouselContainer = (props) => {

    const carousel = useRef();

    const navCarousel = useRef();

  const containerProps = {carousel, navCarousel}

  const containerFunctions = {}

  return (
    <TrailPhotoCarouselComponent
      {...props}
      {...containerProps}
      {...containerFunctions}
    />
  )
}

export default TrailPhotoCarouselContainer
