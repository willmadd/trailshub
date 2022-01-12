import React from 'react'
import 'react-vis/dist/style.css'
import {
  LineSeries,
  HorizontalGridLines,
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
} from 'react-vis'
import { __ } from '../../../translations/translator'
import { Box, Typography } from '@mui/material'
import styles from './ElevationProfile.styles';

const ElevationProfileComponent = ({graphData}) => {
  return (
    <Box sx={styles.profile}>
      {graphData.length > 0 && graphData[0].y ? (
        <FlexibleWidthXYPlot height={150} style={{ fontFamily:"'Questrial', sans-serif" }}>
          <LineSeries
            data={graphData}
            // onNearestXY={hoverOnLine}
            color="#87BE31"
          />
          <HorizontalGridLines />
          <XAxis tickFormat={(v) => `${v}km`} />
          <YAxis tickFormat={(v) => `${v}m`} />
        </FlexibleWidthXYPlot>
      ) : (
        <Box>
          <Typography variant="body">
            {__(
              'Could not display elevation profile - There is no elevation data in this GPX File'
            )}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ElevationProfileComponent
