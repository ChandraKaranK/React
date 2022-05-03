import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadAgain from './readagain';

test('renders read again element', () => {
    render(<ReadAgain bookID={1}/>);
    const readAgainElement = screen.getByText(/Read again/i);
    expect(readAgainElement).toBeInTheDocument();
  });