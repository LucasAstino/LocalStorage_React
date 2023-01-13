import React from "react";
import subHeader from "../../subHeader";
import Logo from "../../imgs/rocket.png";

export default function Header(props) {
  return (
    <header class="header">
      <img class="logo" src={Logo} />

      <nav>
        <ul class="menu">
          <li class="item_menu">{props.nav1}</li>
          <li class="item_menu">{props.nav2}</li>
          <li class="item_menu">{props.nav3}</li>
          <li class="item_menu">{props.nav4}</li>
        </ul>
      </nav>
    </header>
  );
}
