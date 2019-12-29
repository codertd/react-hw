// __tests__/Contact.test.js

import React from 'react';
import {
  render
} from '@testing-library/react';
import Contact from '../Contact';

it('renders', () => {
  const { asFragment } = render(<Contact text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});
