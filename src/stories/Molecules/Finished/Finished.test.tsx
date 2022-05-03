import React from 'react';
import { render, screen } from '@testing-library/react';
import Finished from './Finished';

test('renders finish reading button in book card', () => {
    render(<Finished bookID={1}/>);
    const finishreadElement = screen.getByText(/Finish read/i);
    expect(finishreadElement).toBeInTheDocument();
  });
  