import React from 'react'
import styles from './RouteStats.styles'
import AscendIcon from './img/ascend.svg'
import ClockIcon from './img/clock.svg'
import DescendIcon from './img/descend.svg'
import DistanceIcon from './img/distance.svg'
import { Box, Typography } from '@mui/material'

const RouteStatsComponent = ({
  durationString,
  descentFormatted,
  ascentFormatted,
  difficultyLevel,
  distanceFormatted,
}) => {
  return (
    <Box sx={styles.statsTab}>
      <Box sx={styles.iconWrap}>
        <Box component="img" src={AscendIcon} sx={styles.icon} />
        <Typography variant="body" sx={styles.statText}>
          {ascentFormatted}
        </Typography>
      </Box>
      <Box sx={styles.iconWrap}>
        <Box component="img" src={DescendIcon} sx={styles.icon} />
        <Typography variant="body" sx={styles.statText}>
          {descentFormatted}
        </Typography>
      </Box>
      <Box sx={styles.iconWrap}>
        <Box component="img" src={DistanceIcon} sx={styles.icon} />
        <Typography variant="body" sx={styles.statText}>
          {distanceFormatted}
        </Typography>
      </Box>
      <Box sx={styles.iconWrap}>
        <Box component="img" src={ClockIcon} sx={styles.icon} />
        <Typography variant="body" sx={styles.statText}>
          {durationString}
        </Typography>
      </Box>
    </Box>
  )
}

export default RouteStatsComponent
