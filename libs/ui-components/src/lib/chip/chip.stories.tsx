import React from 'react';
import Chip from './chip';


export default {
  title: 'Chip'
}

export const colors = () => {

  return (
    <>
      <Chip>Default</Chip>
      <Chip color="danger">Danger</Chip>
      <Chip color="warn">Warn</Chip>
      <Chip color="success">Success</Chip>

      <style jsx>{`
        .chip {
          margin: 0 5px;
        }
      `}</style>
    </>
  )
}
