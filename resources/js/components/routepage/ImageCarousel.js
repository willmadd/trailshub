import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './imageCarousel.scss';

const ImageCarousel = ({ images }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <div className="carousel">
            <div className="carousel__container">

            <Slider {...settings}>
                {images.map(img => (
                    <img key={img.url} src={img.url} />
                    ))}
            </Slider>
                    </div>
        </div>
    );
};

export default ImageCarousel;
