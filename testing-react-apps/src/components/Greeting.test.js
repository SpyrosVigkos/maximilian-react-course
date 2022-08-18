import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders hallo world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders Changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("Changed");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the btn was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
