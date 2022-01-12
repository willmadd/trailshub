import { Box, Typography } from '@mui/material';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settings, navSliderSettings} from './TrailPhotoCarousel.config';
import styles from './TrailPhotoCarousel.styles';

const TrailPhotoCarouselComponent = ({carousel, navCarousel, images}) => {
    console.log(styles.image,'gggfgf')
    return (
        <Box sx={styles.slider}>
            <Slider>

                        {images.map((img, index) => (
                            <Box key={img.url} ><Box component={'img'} sx={styles.image} src={img.url}/>kjlkj</Box>
                            // <Box><Typography>hello</Typography></Box>
                            ))}
                            </Slider>
        {/* <Slider {...settings} ref={carousel} asNavFor={navCarousel.current}>
            {images.map((img, index) => (
                <Box key={img.url} ><Box component={'img'} sx={styles.image} src={img.url}/>kjlkj</Box>
                // <Box><Typography>hello</Typography></Box>
            ))}
        </Slider>
        <Slider {...navSliderSettings} ref={navCarousel} asNavFor={carousel.current}           slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}>
            {images.map((img, index) => (
                <Box key={img.url} ><Box component={'img'} sx={styles.image} src={img.url}/>kjlkj</Box>
                // <Box><Typography>hello</Typography></Box>
            ))}
        </Slider> */}
    </Box>
    );
}

export default TrailPhotoCarouselComponent;
