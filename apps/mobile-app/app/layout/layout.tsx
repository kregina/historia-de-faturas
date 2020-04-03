import React from 'react';

import './layout.scss';

import { Toolbar } from '@nx-orbita/ui-components';

/* eslint-disable-next-line */
export interface LayoutProps {}

export const Layout = (props: LayoutProps) => {
  return (
    <Toolbar></Toolbar>
  );
};

export default Layout;
