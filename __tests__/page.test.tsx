import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page experience", () => {
  it("shows the mission control overview", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /oceanblue mission control/i })).toBeInTheDocument();
    expect(screen.getByText(/authorization gate/i)).toBeInTheDocument();
  });

  it("lists the operational modules", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /client workspaces/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automation hub/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ai strategy studio/i })).toBeInTheDocument();
  });
});
