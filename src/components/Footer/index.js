import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.noproposito.com.br/">
        <img
          src="http://noproposito.com.br/wp-content/uploads/2018/07/logo-copiar-3-300x260.png"
          alt="Logo No Propósito"
        />
      </a>
      <p>
        Orgulhosamente criado pela equipe{" "}
        <a href="https://www.noproposito.com.br/">No Propósito</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
