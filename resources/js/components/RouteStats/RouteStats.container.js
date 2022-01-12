import React from 'react'
import RouteStatsComponent from './RouteStats.component'
import secondsToTime from '../../utils/secondsToTime'
import { connect } from 'react-redux'
import { difficulty } from '../../../globalConfig';

const RouteStatsContainer = (props) => {
  const { imperial, trail } = props

  const MetersToFt = 3.28084

  const ftToMiles = 0.000189394


  const [hours, min, sec] = secondsToTime(trail.time)

  const distanceFormatted = imperial
    ? `${Math.round(trail.distance * MetersToFt * ftToMiles)} miles`
    : `${Math.round((trail.distance / 1000) * 100) / 100} km`

  const ascentFormatted = imperial
    ? `${Math.round(trail.ascent * MetersToFt)} ft`
    : `${trail.ascent} m`

  const descentFormatted = imperial
    ? `${Math.round(trail.descent * MetersToFt)} ft`
    : `${trail.descent} m`

  const difficultyLevel = difficulty.find(
    (val) => val.difficultyKey === trail.difficulty
  )

  const containerProps = {
    durationString: `${hours}h ${min}m`,
    descentFormatted,
    ascentFormatted,
    difficultyLevel,
    distanceFormatted,
  }
  const containerFunctions = {}

  return (
    <RouteStatsComponent
      {...props}
      {...containerProps}
      {...containerFunctions}
    />
  )
}
const mapStateToProps = (state) => {
    return {
      imperial: state.config.imperial,
    }
  }


export default connect(mapStateToProps, {})(RouteStatsContainer)
