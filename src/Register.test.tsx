import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./pages/Register";
import "@testing-library/jest-dom";

describe("Register Component", () => {
  test("renders the form with initial state", () => {
    render(<Register />);
    expect(screen.getByText("Register Page")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("mobile")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  test("shows error for invalid username", () => {
    render(<Register />);
    const usernameInput = screen.getByTestId("username");

    fireEvent.change(usernameInput, { target: { value: "invalid" } });
    expect(screen.getByText("Invalid username")).toBeInTheDocument();
  });

  test("does not show error for valid username", () => {
    render(<Register />);
    const usernameInput = screen.getByTestId("username");

    fireEvent.change(usernameInput, { target: { value: "Valid@123" } });
    expect(screen.queryByText("Invalid username")).not.toBeInTheDocument();
  });

  test("shows error for invalid mobile number", () => {
    render(<Register />);
    const mobileInput = screen.getByTestId("mobile");

    fireEvent.change(mobileInput, { target: { value: "123456789" } });
    expect(screen.getByText("Invalid mobile number")).toBeInTheDocument();
  });

  test("does not show error for valid mobile number", () => {
    render(<Register />);
    const mobileInput = screen.getByTestId("mobile");

    fireEvent.change(mobileInput, { target: { value: "55123456789" } });
    expect(screen.queryByText("Invalid mobile number")).not.toBeInTheDocument();
  });
});