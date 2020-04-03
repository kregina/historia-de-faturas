import React, { Children } from 'react';
import Flickity from 'react-flickity-component'
import './carousel.scss';

/* eslint-disable-next-line */
export interface CarouselProps {
  children?
}

const flickityOptions = {
  draggable: true
}

export const Carousel = (props: CarouselProps) => {

  let flickity;

  const onFlickityInit = (ref) => {
      flickity = ref;
      flickity.on('staticClick', function( event, pointer, cellElement, cellIndex ) {
          flickity.select(cellIndex);
      });
  };

  return (
    <Flickity flickityRef={onFlickityInit}
      options={flickityOptions} className="my-10">
        { props.children }
    </Flickity>
  );
};

export default Carousel;
