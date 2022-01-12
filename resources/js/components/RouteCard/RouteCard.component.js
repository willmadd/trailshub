import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import styles from './RouteCard.styles'

import DifficultyTab from '../DifficultyTab'
import RouteStats from '../RouteStats'

const RouteCardComponent = ({
  trail,
  imageLoaded,
  loadingComplete,
}) => {
  return (
    <Card sx={styles.card} key={trail.slug}>
      <CardMedia
        alt={`trail image for ${decodeURIComponent(trail.title)}`}
        component="img"
        sx={styles.bgImg}
        image={trail.image.url}
        onLoad={imageLoaded}
      />
      <CardContent sx={styles.cardContent}>
          <Box sx={styles.statsWrap}>
        <RouteStats trail={trail} />
          </Box>
        <Typography gutterBottom variant="h5" component="div">
          {decodeURIComponent(trail.title)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.description}
        >
          {decodeURIComponent(trail.description)}
        </Typography>
        <Button
          href={`/${trail.slug}`}
          variant="contained"
          color="secondary"
          endIcon={<NavigateNextIcon />}
        >
          See Trail
        </Button>
      </CardContent>
      <Box sx={styles.chip}>
        <DifficultyTab difficulty={trail.difficulty} />
      </Box>
    </Card>
  )
}

export default RouteCardComponent
