import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";



test("renders the h3 with the text 'Links'", () => {
  render();
  expect(screen.queryByText("Links"));
});

test("displays the URL of a Github link passed down as a prop", () => {
  render();
  expect(screen.queryByText("https://github.com/liza"));
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render();
  expect(
    screen.queryByText("https://www.linkedin.com/in/liza/")
  );
});
