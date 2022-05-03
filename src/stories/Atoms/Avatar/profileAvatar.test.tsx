import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileAvatar from './profileAvatar'

test('renders profile avatar', () => {
    render(<ProfileAvatar />);
    const profileElement = screen.getByTestId('PersonIcon');
    expect(profileElement).toBeInTheDocument;
  });