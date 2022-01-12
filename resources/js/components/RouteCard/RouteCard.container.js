import React from 'react'
import RouteCardComponent from './RouteCard.component'


const RouteCardContainer = (props) => {
  const containerProps = {}
  const containerFunctions = {}

  return (
    <RouteCardComponent
      {...props}
      {...containerProps}
      {...containerFunctions}
    />
  )
}



export default RouteCardContainer;
