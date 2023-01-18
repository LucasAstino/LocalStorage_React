import React, { Component } from "react";
import "./styleCalculator.css";

export default class Calculator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container">
        <h1 class="display">0</h1>
        <section class="teclado">
          <button>AC</button>
          <button>-/+</button>
          <button>%</button>
          <button>/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>,</button>
          <button>=</button>
        </section>
      </div>
    );
  }
}
