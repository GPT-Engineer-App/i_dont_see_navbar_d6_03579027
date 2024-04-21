import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/Index";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;