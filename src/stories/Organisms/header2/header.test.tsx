import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Header from './header2';

test('renders header', () => {
    render(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    );
    const Element = screen.getByText(/explore/i);
    expect(Element).toBeInTheDocument();
  });