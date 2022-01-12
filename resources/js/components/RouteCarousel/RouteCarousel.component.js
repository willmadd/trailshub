import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { __ } from "../../translations/translator";
import RouteCard from "../RouteCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./RouteCarousel.styles";
import { settings } from "./RouteCarousel.config";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const RouteCarouselComponent = ({ routes, carousel, nextArrow }) => {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.buttonWrapper}>
                <Typography variant="h4" sx={styles.title}>
                    Recently Added Trails
                </Typography>
                <Box>
                    <Button onClick={()=> carousel.current.slickPrev()}>
                        <ArrowLeftIcon />
                    </Button>
                    <Button onClick={()=> carousel.current.slickNext()}>
                        <ArrowRightIcon />
                    </Button>
                </Box>
            </Box>
            <Box>
                <Slider {...settings} ref={carousel}>
                    {routes.map((route, index) => (
                        <RouteCard key={index} trail={route} />
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default RouteCarouselComponent;
