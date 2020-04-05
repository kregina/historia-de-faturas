import React from 'react';
import { render } from '@testing-library/react';

import FaturaCard from './fatura-card';

describe(' FaturaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FaturaCard />);
    expect(baseElement).toBeTruthy();
  });
});
