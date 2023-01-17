import React from "react";

export default class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.states = [
      (acumulador = "0"),
      (operador = "0"),
      (valorTela = "0"),
      (resultador = "0"),
    ];
    //Components
    const tela = (valor, res) => {
      return (
        <div>
          <span>{valor}</span>
          <span>{res}</span>
        </div>
      );
    };

    const btn = (label, onclick) => {
      return <button onclick={onclick}>{label}</button>;
    };
  }

  // functions
  //ss
  //
}
