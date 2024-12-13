import { act, render, screen } from "@testing-library/react";
import Page from "../app/page";

test("renders the response from the API", async () => {
  // Mock the server call
  const mockResponse = "Hello, World!";
  fetch = jest.fn(() =>
    Promise.resolve({
      text: jest.fn().mockResolvedValue(mockResponse),
    })
  );

  // Render the page to test
  await act(async () => {
    render(<Page />);
  });

  expect(await screen.getByText(mockResponse)).toBeDefined();
  expect(fetch).toHaveBeenCalledTimes(1);
});
