import React from 'react';

import Carousel from './carousel';

export default {
  title: 'Carousel'
}

const list = [
  { id: 1, img: 'https://placeimg.com/640/480/animals'},
  { id: 2, img: 'https://placeimg.com/640/480/nature'},
  { id: 3, img: 'https://placeimg.com/640/480/architecture'}
]

export const simple = () => {
  const items = list.map((item, i) => <img key={item.id.toString()} src={item.img} />);

  return (
    <Carousel>
      {items}
    </Carousel>
  )
}
