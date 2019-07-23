import React from "react";
import { Head } from "./styles";

import logo from "./images/logo-danionary.png"

export default function Header() {
  return (
    <Head>
      <img src={logo} alt="logo" />
    </Head>
  );
}
