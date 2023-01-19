import React, { Component } from "react";
import "./styleCalculator.css";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      num: "0",
      numOld: "0",
    };
  }
  addNum = (e) => {
    var getNum = e.target.value;
    if (this.state.num == "0") {
      this.setState({ num: getNum });
    } else {
      this.setState({ num: this.state.num + getNum });
    }
  };

  operation = (e) => {
    var numOld = this.state.num;
    this.setState({ numOld: numOld });
    this.setState({ num: "0" });
    var sign = e;
    console.log(numOld);
  };
}

res = (s) => {
  switch (s) {
    case "+":
      res = this.state.num + this.state.numOld;
      this.setState({ num: res });
      break;
  }

  clear = () => {
    this.setState({ num: "0" });
  };

  porcentage = () => {
    this.setState({ num: this.state.num / 100 });
  };

    render(){
      
  return (
    <div class="container">
      <h1 class="display">{this.state.num}</h1>
      <section class="teclado">
        <button onClick={() => this.clear()}>AC</button>
        <button>-/+</button>
        <button onClick={() => this.porcentage()}>%</button>
        <button class="orange">/</button>
        <button onClick={(e) => this.addNum(e)} value={7} class="gray">
          7
        </button>
        <button onClick={(e) => this.addNum(e)} value={8} class="gray">
          8
        </button>
        <button onClick={(e) => this.addNum(e)} value={9} class="gray">
          9
        </button>
        <button class="orange">X</button>
        <button onClick={(e) => this.addNum(e)} value={4} class="gray">
          4
        </button>
        <button onClick={(e) => this.addNum(e)} value={5} class="gray">
          5
        </button>
        <button onClick={(e) => this.addNum(e)} value={6} class="gray">
          6
        </button>
        <button class="orange">-</button>
        <button onClick={(e) => this.addNum(e)} value={1} class="gray">
          1
        </button>
        <button onClick={(e) => this.addNum(e)} value={2} class="gray">
          2
        </button>
        <button onClick={(e) => this.addNum(e)} value={3} class="gray">
          3
        </button>
        <button onClick={(e) => this.operation(e)} value={"+"} class="orange">
          +
        </button>
      </section>
      <footer class="footer">
        <button onClick={(e) => this.addNum(e)} value={0} class="gray teste">
          0
        </button>
        <button onClick={(e) => this.addNum(e)} value={","} class="gray">
          ,
        </button>
        <button class="orange">=</button>
      </footer>
    </div>
  );
}
};
