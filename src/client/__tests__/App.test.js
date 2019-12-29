// __tests__/App.test.js

import React from 'react';
import {
  render
} from '@testing-library/react';
import App from '../App';

it('renders', () => {
  // Mock fetch so it doesn't make a network call.
  global.fetch = jest.fn(() => Promise.resolve({ json: () => '' }));

  const { asFragment } = render(<App text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});
