import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginLayout from './LoginLayout'; // Import your component

describe('LoginLayout Component', () => {
  it('renders the component', () => {
    render(<LoginLayout />);
    
    // Ensure that the component renders without errors
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('validates email and password inputs', () => {
    render(<LoginLayout />);
    
    // Get email and password input elements
    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('LOGIN IN');

    // Trigger form submission without filling in any data
    fireEvent.click(submitButton);

    // Check for email validation error message
    expect(screen.getByText('Please provide your organization email')).toBeInTheDocument();
    
    // Check for password validation error message
    expect(screen.getByText('Password must contain at least 6 characters, including at least one uppercase letter and one numeric digit, and must not exceed 15 characters')).toBeInTheDocument();
    
    // Fill in valid email and password
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP@ssw0rd' } });
    
    // Trigger form submission again
    fireEvent.click(submitButton);

    // Ensure that error messages are no longer visible
    expect(screen.queryByText('Please provide your organization email')).toBeNull();
    expect(screen.queryByText('Password must contain at least 6 characters, including at least one uppercase letter and one numeric digit, and must not exceed 15 characters')).toBeNull();
  });
});
