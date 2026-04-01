import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// const rootRoute = createRootRoute({
//   component: () => (
//     <div>
//       <h1>Hello</h1>
//       <Link to="/">Home</Link>
//       <Outlet />
//     </div>
//   ),
// });

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: function Index() {
//     return <h1>Hello "/"!</h1>;
//   },
// });

// const cuisineRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/cuisine",
//   component: function Cuisine() {
//     return <h1>Hello "/cuisine"!</h1>;
//   },
// });

// const routeTree = rootRoute.addChildren([indexRoute, cuisineRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
