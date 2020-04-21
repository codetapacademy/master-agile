import s from "styled-components";
import { Link } from "@reach/router";

export const StyledNav = s.nav`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLink = s(Link)`
  border: 2px solid #3e7;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
`;
