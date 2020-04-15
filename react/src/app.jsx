import React from "react";
import { Router } from "@reach/router";
import { MarianZburlea } from "./marianzburlea";
import { StyledLink, StyledNav } from "./app.style";
import { CornelCrisitanFilip } from "./psyhedeliq";

const App = () => {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/marianzburlea">Marian Zburlea</StyledLink>
        <StyledLink to="/cornel-cristian-filip">
          Cornel Cristian Filip
        </StyledLink>
      </StyledNav>
      <Router>
        <MarianZburlea path="/marianzburlea" />
        <CornelCrisitanFilip path="/cornel-cristian-filip" />
      </Router>
    </div>
  );
};

export { App };
