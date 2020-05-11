import React from "react";
import { Router } from "@reach/router";
import { MarianZburlea } from "./marianzburlea";
import { StyledLink, StyledNav } from "./app.style";
import { CornelCrisitanFilip } from "./psyhedeliq";
import { MihaelaChetran } from "./mihaelachetran";

const App = () => {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/marianzburlea">Marian Zburlea</StyledLink>
        <StyledLink to="/cornel-cristian-filip">
          Cornel Cristian Filip
        </StyledLink>
        <StyledLink to="/mihaela-chetran">
          Mihaela Chetran
        </StyledLink>
      </StyledNav>
      <Router>
        <MarianZburlea path="/marianzburlea" />
        <CornelCrisitanFilip path="/cornel-cristian-filip" />
        <MihaelaChetran path="/mihaela-chetran" />
      </Router>
    </div>
  );
};

export { App };
