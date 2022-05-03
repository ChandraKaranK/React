import React from 'react';
import {render,screen} from "@testing-library/react";
import LogoutButton from './logoutButton';

test("check log out button",()=>{

    render(<LogoutButton/>)
    const logoutElement = screen.getByText(/log out/i)
    expect(logoutElement).toBeInTheDocument

})