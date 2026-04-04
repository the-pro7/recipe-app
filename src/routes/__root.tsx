import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="container p-7 overflow-clip">
        <header>
          <Navbar />
        </header>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
}
