// __tests__/Users.test.js

import React from 'react';
import {
  render
} from '@testing-library/react';
import Users from '../Users';

it('renders', () => {
  const { asFragment, getByTestId, getByText } = render(<Users text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();

  expect(getByTestId('h1tag')).toHaveTextContent('Hello!');
  expect(getByText('Hello!')).toHaveClass('fancy-h1');
});

// test('Component Renders', () => {
//   render(<Users>Users</Users>);

//   // query* functions will return the element or null if it cannot be found
//   // get* functions will return the element or throw an error if it cannot be found
//   // expect(screen.queryByText('Users')).toBe(<h1>Users</h1>);

//   // the queries can accept a regex to make your selectors more resilient to content tweaks
//   // and changes.
//   // fireEvent.click(screen.getByLabelText(/show/i));

//   // .toBeInTheDocument() is an assertion that comes from jest-dom
//   // otherwise you could use .toBeDefined()
//   expect(screen.getByText('Users')).toBeInTheDocument();
// });
