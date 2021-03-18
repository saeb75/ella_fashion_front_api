import styled, { createGlobalStyle } from "styled-components";
export const theme = {
  darkBlue: "#293355",
  red: "#ba7a2d",
  fontBlack: "#323232",
  white: "#ffffff",
  grey: "#c1c1c1",
  lightGrey: "#e6e6e6",
};
export const GlobalStyle = createGlobalStyle`
    *{
      margin:0px;
      font-family: 'Overpass', sans-serif;
      color:${theme.fontBlack}
    }
   p{
     margin:0;
     padding:0;
   }

  

`;
export const Line = styled.li`
  text-decoration: none;
  list-style: none;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: black;
    transition: 0.4s all;
  }
  &:hover::after {
    width: 100%;
  }
`;
export const NavItem = styled(Line)`
  font-weight: 700;
  margin-right: 50px;
  font-size: 0.875rem;
`;

export const GButton = styled.button`
  background-color: ${({ darkBlue }) =>
    darkBlue ? theme.darkBlue : theme.white};
  font-weight: 300;
  font-size: 18px;
  padding: ${({ large }) => (large ? "15px 25px" : "25px 120px ")};
  color: ${theme.white};
  border: none;
  transition: 0.4s all;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  &:hover {
    background-color: ${({ hover }) => (hover ? theme.white : theme.darkBlue)};
    color: ${({ hover }) => (hover ? theme.darkBlue : theme.white)};
  }
`;
