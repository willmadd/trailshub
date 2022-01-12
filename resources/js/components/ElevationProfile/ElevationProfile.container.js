import React from 'react'
import ElevationProfile from './ElevationProfile.component'

const ElevationProfileContainer = (props ) => {
console.log('ppprops', props);
    // const styles = {fontFamily:"'Questrial', sans-serif"}
    const {trail} = props;

    console.log('route', trail)

    const graphData = trail.map(dataPoint=>{
        return {
            y:dataPoint.elevation,
            x:dataPoint.distance
        }
    })

    console.log('graph data',graphData);

  const containerFunctions = {}
  const containerProps = {graphData}
  return (
    <ElevationProfile {...props} {...containerProps} {...containerFunctions} />
  )
}

export default ElevationProfileContainer
