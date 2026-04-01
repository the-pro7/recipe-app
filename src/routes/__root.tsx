import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="container p-7">
        <header>
          <Navbar />
        </header>
        <div>Hello "__root"!</div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
