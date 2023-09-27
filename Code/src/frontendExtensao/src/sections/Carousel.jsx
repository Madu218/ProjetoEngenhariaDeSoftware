import React from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chevronLeft from '../assets/chevron-left.png';
import chevronRight from '../assets/chevron-right.png';

import Card from "../components/Card";

function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        >
            <img src={props.img} alt="heart"
                style={{ position: "absolute", left: "-.8rem" }}
            />
        </div>
    );
};

export default function Carousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomArrow img={chevronRight} />,
        prevArrow: <CustomArrow img={chevronLeft} />,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <Card n={1} />
                <Card n={2} />
                <Card n={3} />
                <Card n={4} />
                <Card n={5} />
                <Card n={6} />
                <Card n={7} />
                <Card n={8} />
                <Card n={9} />
                <Card n={10} />
                <Card n={11} />
                <Card n={12} />
            </Slider>
        </div>
    );
};