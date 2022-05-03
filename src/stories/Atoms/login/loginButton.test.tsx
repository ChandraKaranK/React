import React from 'react';
import {render,screen} from "@testing-library/react";
import LoginButton from './loginButton';

test("check log in button",()=>{

    render(<LoginButton/>)
    const loginElement = screen.getByText(/log in/i)
    expect(loginElement).toBeInTheDocument

})