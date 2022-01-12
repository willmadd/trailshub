import { Typography, Box, Container, Button, Link, Icon } from '@mui/material'
import React from 'react'
import Youtube from '../../components/common/Youtube'
import SingleTrailMap from '../../components/routepage/SingleTrailMap'
import Tags from '../../components/routepage/Tags'
import TrailTags from '../../components/TrailTags'
import styles from './RoutePage.styles'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import MtbIcon from '../../../images/icons/mtb-y.svg'
import BikeHireIcon from '../../../images/icons/bike-hire.svg'
import DifficultyTab from '../../components/DifficultyTab/'
import CloseIcon from '@mui/icons-material/Close'
import RouteStats from '../../components/RouteStats'
import ElevationProfile from '../../components/ElevationProfile'
import TrailPhotoCarousel from '../../components/TrailPhotoCarousel'
const RoutePageComponent = ({ trail, loading }) => {
  console.log(trail)
  const {
    title,
    id,
    gpx,
    user_id,
    main_image,
    strava_link,
    youtube_link,
    coords,
    description,
    activity,
    hire_centre,
    tags,
    slug,
    approved,
    completed,
    difficulty,
    summary,
    images,
    userName,
  } = trail
  return loading ? (
    <Typography>Loading</Typography>
  ) : (
    <Box sx={styles.page}>
      <Container maxWidth="lg" disableGutters sx={styles.pageTemplate}>
        <Box
          src={
            images && images.length > 0
              ? images[0].url
              : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'
          }
          component="img"
          sx={styles.image}
        />
        <Box sx={styles.trailHead}>
          <Box sx={styles.leftHead}>
            <Box>
              <Box sx={styles.titleWrap}>
                <Typography sx={styles.routeTitle} variant="h4">
                  {decodeURIComponent(`${title}`)}
                </Typography>
                <DifficultyTab difficulty={difficulty} />
              </Box>
              <Typography variant="p">
                <Link
                  sx={styles.userLink}
                  href={`/riders/${userName.toLowerCase()}`}
                >
                  {decodeURIComponent(`Trail by ${userName}`)}
                </Link>
              </Typography>
            </Box>

            <Box sx={styles.trailInfo}>
              <Icon sx={styles.trailIcon}>
                <Box
                  component="img"
                  src={MtbIcon}
                  // sx={styles.trailIcon}
                />
              </Icon>
              <Typography>{activity}</Typography>
            </Box>
            {hire_centre !== null && (
              <Box sx={styles.trailInfo}>
                {!hire_centre ? (
                  <CloseIcon sx={styles.trailIconImg} color="bold" />
                ) : (
                  <Icon sx={styles.trailIcon}>
                    <Box
                      component="img"
                      src={BikeHireIcon}
                      sx={styles.trailIconImg}
                    />
                  </Icon>
                )}
                <Typography>{`Hire Center`}</Typography>
              </Box>
            )}
          </Box>
          <Button
            color="secondary"
            variant="contained"
            endIcon={<FileDownloadIcon />}
          >
            Download .GPX File
          </Button>
        </Box>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftBox}>
            {tags && <TrailTags tagsArr={tags} />}
            <Youtube url={decodeURIComponent(youtube_link)} />
            <Typography sx={styles.description}>
              {decodeURIComponent(`${description}`)}
            </Typography>
            <TrailPhotoCarousel images={images} />
          </Box>
          <Box sx={styles.rightBox}>
            <Typography variant={'h4'} sx={styles.title}>
              {decodeURIComponent(`${title}`)}
            </Typography>
            <Box sx={styles.statsWrap}>
            <RouteStats trail={trail} />
            </Box>
            <Typography sx={styles.summary}>
              {decodeURIComponent(`${summary}`)}
            </Typography>
            {coords.length > 0 && <SingleTrailMap route={coords} />}
            <ElevationProfile trail={coords}/>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default RoutePageComponent
