import * as ReactDOM from "react-dom/client";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "swiper/css/bundle";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { themeCustomized } from "./theme";
import { Home } from "./pages/home";

// 3. Pass the new theme to `ChakraProvider`

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={themeCustomized}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>
  );
}
