import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Relogio() {
  return (
    <>
      <p class="relogio">
        {<FontAwesomeIcon icon={faClock} className="icon" />}
        {new Date().toLocaleTimeString()}
      </p>
    </>
  );
}
