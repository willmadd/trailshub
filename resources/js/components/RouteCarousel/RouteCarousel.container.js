import React, { useState, useEffect, useRef } from 'react'
import RouteCarouselComponent from './RouteCarousel.component'
import axios from 'axios'

const RouteCarouselContainer = (props) => {
  const carousel = useRef()

  const [routes, setRoutes] = useState([])

  useEffect(() => {
    getCarouselRoutes()
  }, [])

  const getCarouselRoutes = () => {
    axios.get(`/api/getrecenttrails/${props.quantity}`).then((res) => {
      setRoutes(res.data)
    })
  }

  const containerFunctions = {}

  const containerProps = { routes, carousel }

  return (
    <RouteCarouselComponent
      {...props}
      {...containerFunctions}
      {...containerProps}
    />
  )
}

export default RouteCarouselContainer
