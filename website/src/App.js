import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Header from "./components/header";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Services from "./pages/services";
import Clients from "./pages/clients";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";

const App = (props) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header container={container} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
