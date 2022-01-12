import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from '../common/Image';
import image from './img/intro.jpg';
import placeHolderImg from './img/intro.webp';
import {text} from './introSection.config';
import styles from './IntroSection.styles';

const IntroSection = () => {
    return (
        <Box sx={styles.wrapper}>
            <Image sx={styles.image} src={image} alt="image" overlaySrc={placeHolderImg}/>
            <Box sx={styles.modal}>
                <Typography variant="h5">{text}</Typography>
            </Box>
        </Box>
    );
};

export default IntroSection;
