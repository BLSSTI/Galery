import styled from "styled-components";

export const Title = styled.p`
  font-size: 48px;
  color: #797878;
  font-family: "Merienda";
  text-align: center;
  margin-top: 80px;
`;
export const Navlist = styled.ul`
  li {
    list-style-type: none;
    text-decoration: none;
    list-style: none;
    display: inline;
    margin: 30px;
    padding: 0px;
    text-decoration: none;
  }
`;

export const DivBranca = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 190vh;
  height: 90vw;
  align-self: center;
  margin-top: 20%;
  margin-left: 40px;

  h1 {
    color: #7698a9;
    text-align: center;
    font-size: 16px;
    margin-top: 10%;
  }
  p {
    color: #7f7f7f;
    margin-top: 5%;
    max-width: 650px;
    margin-left:20%;
  }
`;
export const Footer = styled.footer`
  background-color: blue;
  bottom: 0;
  width: 100%;
  position: fixed;
  text-align: center;
`;
export const Nav = styled.nav`
  background: #1b546f;
  height: 80px;
  width: 100vw;
  margin-top: -80px;
  margin-left: -20px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-left: 10%;
a{
  text-decoration:none;
  justify-content: space-between;
  color: #2b86b2;

}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
