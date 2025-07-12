import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../Contact';
import { send } from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('Contact component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('shows error message when fields are empty', () => {
    render(<Contact />);
    fireEvent.click(screen.getByText(/Send Message/i));
    expect(screen.getByText(/Please fill in all fields./i)).toBeInTheDocument();
  });

  test('calls emailjs send on valid form submission', async () => {
    (send as jest.Mock).mockResolvedValueOnce({});
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } });

    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => {
      expect(send).toHaveBeenCalledTimes(1);
    });
  });

  test('shows error message on send failure', async () => {
    (send as jest.Mock).mockRejectedValueOnce({ text: 'Error' });
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } });

    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
    });
  });
});
