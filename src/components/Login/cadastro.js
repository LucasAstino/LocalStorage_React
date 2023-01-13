import React, { useState } from "react";

export default function cadastro() {
  const [nome, setNome] = useState();

  const [senha, setSenha] = useState();

  const dados = [
    ["chave", "valor"],
    ["chave", "valor"]
  ];

  const armazenar = (chaveNome, valorNome, chaveSenha, valorSenha) => {
    localStorage.setItem((dados[0][0] = chaveNome), (dados[0][1] = valorNome));
    localStorage.setItem(
      (dados[1][0] = chaveSenha),
      (dados[1][1] = valorSenha)
    );
  };

  return (
    <section class="form">
      <div class="cadastro">
        <label>Nome </label>
        <input
          value={nome}
          type="email"
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        ></input>
        <label>Senha </label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite seu senha"
        ></input>
      </div>
      <button
        onClick={() => armazenar("ls_nome", nome, "ls_senha", senha)}
        class="salvar"
      >
        Salvar
      </button>
    </section>
  );
}
