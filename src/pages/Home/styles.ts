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
  width: 180vh;
  height: 98vw;
  align-self: center;
  margin-top: 20%;
  margin-left: 40px;
  padding-bottom: 40px;

  

  h1 {
    color: #1b546f;
    text-align: center;
    font-size: 16px;
    margin-top: 10%;
  }
  p {
    color: #7f7f7f;
    margin-top: 3%;
    max-width: 650px;
    margin-left:20%;
    justify-content: space-between;
  }

`;

export const Divazul = styled.div`
background-color: #1b546f;
  position: absolute;
  width: 40vh;
  height: 15vw;
  margin-top: 17%;
  margin-left: 70%;
  display:flex;
    


h1{
  margin-top: 20px;
  color: #26759b;
  padding: 20px;
  font-size: 16px;
  white-space: nowrap;

}

p{
  color:white;
  margin-top: -10px;
  margin-left:20px;
  max-width: 150px;
  font-size: 10px;
}
button{
position: absolute;
margin-bottom: 0;
margin-top: 230px;
margin-left: 20px;
align-items: baseline;
width: 200px;
height:40px;
background-color: #1b546f;
color: white;
border:none;
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
export const Container = styled.div`
p{
  color: #7f7f7f;
    margin-top: 3%;
    max-width: 500px;
    margin-left:20%;
    justify-content: space-between;
    font-size: 14px;
}
h1{
margin-left: 55px;
margin-bottom: 50px;

}
div{
  align-items: center;
  display:inline-block;
  margin-left: 11%;
}
`;

export const Upload = styled.div`
  display: flex;
  justify-content: center;
 
`;