import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header/Header";
import App from "./App";
import SubHeader from "./subHeader";
import Cadastro from "./components/Login/cadastro";
import Calculadora from "./components/calculadora/Calculator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function thictoc() {
  root.render(
    <>
      <Header nav1="home" nav2="contact" nav3="info" nav4="about" />
      <SubHeader />
      <Cadastro />
      {/* <App /> */}
      <Calculadora />
    </>
  );
}

setInterval(thictoc, 1000);
