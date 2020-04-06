import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index faturas={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Index faturas={[]} />);
    expect(getByText('Welcome to mobile-app! [DEV]')).toBeTruthy();
  });
});
