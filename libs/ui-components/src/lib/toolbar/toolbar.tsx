import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './toolbar.scss';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div className="toolbar">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default Toolbar;
