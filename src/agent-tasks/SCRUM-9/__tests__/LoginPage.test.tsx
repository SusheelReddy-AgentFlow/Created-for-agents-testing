import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../LoginPage";
import React from "react";

describe("LoginPage", () => {
  it("renders without crashing", () => {
    render(<LoginPage />);
    expect(screen.getByText(/Login to your account/i)).toBeDefined();
  });

  it("updates username and password fields on change", () => {
    render(<LoginPage />);
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpass");
  });

  it("displays error message if username or password is empty on submit", () => {
    render(<LoginPage />);
    const loginButton = screen.getByRole("button", { name: /Login/i });

    fireEvent.click(loginButton);

    expect(screen.getByText(/Please enter both username and password\./i)).toBeDefined();
  });

  it("calls alert with username on successful submission", () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<LoginPage />);
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /Login/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });
    fireEvent.click(loginButton);

    expect(alertMock).toHaveBeenCalledWith('Login attempt with: testuser');
    alertMock.mockRestore();
  });
});