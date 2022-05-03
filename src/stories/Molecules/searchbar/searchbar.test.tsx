import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './searchbar';

describe("renders search bar",()=>{

    test('renders search bar element', () => {
        render(<SearchBar/>);
        const searchbarElement = screen.getByPlaceholderText("search by name or author");
        expect(searchbarElement).toBeInTheDocument();
      });

    test('renders search bar element to be not empty', () => {
        render(<SearchBar/>);
        const searchbarElement = screen.queryByPlaceholderText("search by name or author");
        expect(searchbarElement).not.toBeNull;
      });

})
