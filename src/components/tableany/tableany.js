import React, { useState } from "react";

const sistemas = [
  { sistema: "anydesk", senha: "sidns12" },
  { sistema: "anydesk", senha: "sddsadw" },
  { sistema: "teamviewer", senha: "dsdsads12" },
  { sistema: "teamviewer", senha: "suporte123" },
  { sistema: "khelp", senha: "dsada2" },
  { sistema: "khelp", senha: "s3423edsds" },
];

const linha = (sis) => {
  const li = [];
  sistemas.forEach((system) => {
    if (system.sistema == sis || sis == "") {
      li.push(
        <tr>
          <td>{system.sistema}</td>
          <td>{system.senha}</td>
        </tr>
      );
    }
  });
  return li;
};

const tabcarros = (sis) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>sistema</th>
          <th>senha</th>
        </tr>
      </thead>
      <tbody>{linha(sis)}</tbody>
    </table>
  );
};

const pesquisa = (sis, setSis) => {
  return (
    <div>
      <input
        placeholder="digite o sistema"
        value={sis}
        onChange={(e) => setSis(e.target.value)}
      ></input>
    </div>
  );
};

export default function tableany() {
  const [sistema, setSistema] = useState("");
  return (
    <div>
      {pesquisa(sistema, setSistema)}

      {tabcarros(sistema)}
    </div>
  );
}
