import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFound/NotFound";
import { HomePage } from "../pages/Home/HomePage";
import { CreateContactPage } from "../pages/createContact/CreateContactPage";
import EditPage from "../pages/edit/EditPage";
import { ContactPage } from "../pages/Contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreateContactPage />,
      },
      {
        path: "/edit/:contactId",
        element: <EditPage />,
      },
      {
        path: "/contact/:contactId",
        element: <ContactPage />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
