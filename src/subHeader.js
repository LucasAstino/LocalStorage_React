import React from "react";
import Relogio from "./components/Relogio/relogio";
import DarkAndWhite from "./components/DarkAndWhite/DarkAndWhite";

export default function subHeader() {
  return (
    <section class="subHeader">
      <Relogio />
      <DarkAndWhite />
    </section>
  );
}
