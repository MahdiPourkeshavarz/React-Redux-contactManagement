import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFound/NotFound";
import { HomePage } from "../pages/Home/HomePage";
import { CreateContactPage } from "../pages/createContact/CreateContactPage";
import { EditPage } from "../pages/edit/EditPage";
import { ContactPage } from "../pages/Contact/ContactPage";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contacts/create",
        element: <CreateContactPage />,
      },
      {
        path: "/contacts/edit/:contactId",
        element: <EditPage />,
      },
      {
        path: "/contacts/:contactId",
        element: <ContactPage />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
