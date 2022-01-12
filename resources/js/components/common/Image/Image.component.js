import React from 'react'
import { Box } from '@mui/material'
import styles from './Image.styles';

const ImageComponent = ({
  src,
  hasLoaded,
  setHasLoaded,
  overlaySrc,
  sx,
  alt,
  loading,
}) => {
  return (
    <Box sx={styles.boxWrapper}>
      {overlaySrc && (
        <Box
        component={"img"}
          sx={{ ...sx, ...styles.imageOverlay }}
          src={overlaySrc}
          alt={alt || 'overlay'}
          loading={loading || 'lazy'}
          style={{ opacity: `${hasLoaded ? '0' : '1'}`, transition: 'opacity .25s ease-in-out' }}
        />
      )}
      <Box
      component={"img"}
         sx={{ ...sx, ...styles.image }}
        src={src}
        alt={alt || 'overlay'}
        loading={loading || 'lazy'}
        onLoad={() => setHasLoaded(true)}

        style={{ opacity: `${hasLoaded ? '1' : '0'}`, transition: 'opacity .25s ease-in-out' }}
      />
    </Box>
  )
}

export default ImageComponent
