import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import createCache from "@emotion/cache";
import { ToastContainer } from "react-toastify";
import {
  EuiPageTemplate,
  EuiPageSection,
  EuiImage,
  EuiAvatar,
  EuiSpacer,
  EuiTitle,
  EuiIcon,
  EuiProgress,
  EuiProvider,
  euiStylisPrefixer,
  EuiThemeColorMode,
} from "@elastic/eui";

//css
import "react-toastify/dist/ReactToastify.css";
import "@elastic/eui/dist/eui_theme_light.min.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import router from "./_setup/router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeApp } from "firebase/app";

const container = document.querySelector('meta[name="emotion-styles"]');
const cache = createCache({
  key: "eui",
  container: container || undefined,
  stylisPlugins: [euiStylisPrefixer],
});
cache.compat = true;

function App() {
  const queryClient = new QueryClient();

  const firebaseConfig = {
    apiKey: "AIzaSyCORwwB0ZJixQhlr5zYCJnrETx6ClZsDQ8",
    authDomain: "test-2c9a0.firebaseapp.com",
    projectId: "test-2c9a0",
    storageBucket: "test-2c9a0.appspot.com",
    messagingSenderId: "432649207852",
    appId: "1:432649207852:web:41c871d514edb1bf6d1189",
    measurementId: "G-XKSSCK55JJ",
  };

  // init firebase
  initializeApp(firebaseConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <EuiProvider colorMode="light" cache={cache}></EuiProvider>
    </QueryClientProvider>
  );
}

export default App;
