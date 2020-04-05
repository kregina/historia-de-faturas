import React, { Fragment } from 'react';

import './layout.scss';

import { Toolbar } from '@nx-orbita/ui-components';

export const Layout: React.FunctionComponent = ({children}) => {
  return (
    <Fragment>
      <Toolbar></Toolbar>
      {children}
    </Fragment>
  );
};

export default Layout;
