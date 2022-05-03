import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("renders App",()=>{

test('renders loading', () => {
  render(<App />);
  const loadElement = screen.getByText(/loading.../i);
  expect(loadElement).toBeInTheDocument();
});

// test('renders explore',async () => {
//   render(<App />);
//   expect( await screen.findByText(/explore/i)).toBeInTheDocument();
// });

})
