import React, { Component } from "react";

export default class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    // this.states = [
    //   (num = 0),
    //   (acumulador = "0"),
    //   (operador = "0"),
    //   (valorTela = "0"),
    //   (resultador = "0"),
    // ];
  }
  //Components
  //   const tela = (valor, res) => {
  //     return (
  //       <div>
  //         <span>{valor}</span>
  //         <span>{res}</span>
  //       </div>
  //     )
  //   }

  //   var numero= '2'

  //   const btn = (label, onclick) => {
  //     return <button onclick={onclick}>{label}</button>
  //   }

  //   const addDigito = (d) => {
  //     if (d == "-" || d == "+" || d == "*" || (d == "/" && operador)) {
  //       console.log("+-/*");
  //       this.setStates({ operador: false, valorTela: resultado + d })
  //       return;
  //     }
  //     if (operado) {
  //       this.setState({ valorTela: d, operador: false })
  //       return;
  //     } else {
  //       const valorDigitadoTela = valorTela + d
  //       this.setState({ valorTela: valorDigitadoTela })
  //     }
  //   };
  // }

  // render() {
  //   consolo.log(numero + 5);
  //   return (
  //     <>
  //       <h1>{this.State(num)}</h1>
  //     </>
  //   );
  // }
}
