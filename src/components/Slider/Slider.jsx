'use client'

import React from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './slider.module.css'
import SliderInfo from '../SliderInfo/SliderInfo';
//import Typography from '@mui/material'

const Slider = () => {
  return (
    <div className={styles.container}>
      <SliderInfo />
      <Carousel data-bs-theme="dark"
        style={{ opacity: 0.7 }}
        indicators={false}
        className={styles.carousel}
      >
        <CarouselItem className={styles.carouselItem}>
          <Image
            className="d-block w-100"
            src="./1.jpg"
            alt="First slide"
            fill={true}
          />


        </CarouselItem>
        <CarouselItem className={styles.carouselItem}>
          <Image
            className="d-block w-100"
            src="./2.jpg"
            alt="Second slide"
            fill={true}
          />

        </CarouselItem>
        <CarouselItem className={styles.carouselItem}>
          <Image
            className="d-block w-100"
            src="./3.jpg"
            alt="Third slide"
            fill={true}
          />

        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default Slider