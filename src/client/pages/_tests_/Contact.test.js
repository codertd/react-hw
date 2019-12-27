// __tests__/Contact.test.js

import React from 'react';
import {
  render, screen
} from '@testing-library/react';
import Contact from '../Contact';

describe('Testing the Contact component.', () => {
  test('Component Renders', () => {
    render(<Contact>Contact</Contact>);
  });

  test('Contains the proper text', () => {
    render(<Contact>Contact</Contact>);

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(screen.queryByText('Contact')).toBe('Contact');

    // the queries can accept a regex to make your selectors more resilient to content tweaks
    // and changes.
    // fireEvent.click(screen.getByLabelText(/show/i));

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
