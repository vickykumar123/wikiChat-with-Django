import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import {ThemeProvider} from "@mui/material";
import {createMuiTheme} from "./theme/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={createMuiTheme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
