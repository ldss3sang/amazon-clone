import React from "react";
import { HeaderWrapper, LogoImg, SearchBar } from "./styles";
import logo from "../../utils/logo.jpg";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoImg src={logo} alt="logo" />
        <SearchBar type="text"></SearchBar>
        <h1>Log in</h1>
      </HeaderWrapper>
    </>
  );
};

export default Header;
