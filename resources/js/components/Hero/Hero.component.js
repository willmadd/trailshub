import React from 'react'
import { Container, Box, Typography, InputBase, Button } from '@mui/material'
import Geosuggest from 'react-geosuggest'
import styles from './Hero.styles'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Image from '../common/Image'
import OverlayPhoto from './img/hero2x1.webp'

const HeroComponent = ({ searchSuggest, animate, submitLocation }) => {
  console.log('animate is animate', animate)
  return (
    <Container sx={styles.container} disableGutters maxWidth={'xl'}>
      {/* <img src="/images/hero/hero2x1.jpg" alt="hero" />
       */}
      {/* <Box
                component="img"
                sx={styles.heroImage}
                alt=""
                src="/images/hero/hero2x1.jpg"
            /> */}
      <Image sx={styles.heroImage} alt="" src="/images/hero/hero2x1.jpg" overlaySrc={OverlayPhoto}/>
      <Box sx={styles.modal}>
        <SearchIcon color="primary" sx={styles.icon} />
        <Geosuggest
          ref={searchSuggest}
          onUpdateSuggests={(e) => animate(e)}
          onSuggestSelect={submitLocation}
          placeholder={'Find local MTB Trails...'}
        />
        <Button variant="contained" color="secondary" sx={styles.nextButton}>
          <ArrowForwardIosIcon color="primary" />
        </Button>
      </Box>
    </Container>
  )
}

export default HeroComponent
