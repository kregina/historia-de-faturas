import React, { Children } from 'react';
import Flickity from 'react-flickity-component';

/* eslint-disable-next-line */
export interface CarouselProps {
}

const flickityOptions = {
  draggable: true
}

export const Carousel : React.FunctionComponent<CarouselProps> = props => {

  let flickity;

  const onFlickityInit = (ref) => {
      flickity = ref;
      flickity.on('staticClick', function( event, pointer, cellElement, cellIndex ) {
          flickity.select(cellIndex);
      });
  };

  return (
    <>
      <div className="carousel-content">
        <Flickity flickityRef={onFlickityInit}
          options={flickityOptions} className="my-10">
            { props.children }
        </Flickity>
      </div>

      <style jsx>{`
        .carousel-content {
          margin: 50px 0;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Carousel;
