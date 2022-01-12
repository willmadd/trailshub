import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.styles';

const FooterComponent = () => {
    return (
        <Box sx={styles.footer} component="footer">
            <Typography sx={styles.copyright}>
            {`© Trailshub ${new Date().getFullYear()}`}
            </Typography>
        </Box>
    );
}

export default FooterComponent;
