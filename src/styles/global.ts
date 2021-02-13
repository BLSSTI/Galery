import React from 'react';
import { createGlobalStyle} from 'styled-components';
import praiabg from '../assets/água.png'
export default createGlobalStyle `
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #faefde url(${praiabg})no-repeat;
  background-size: 100vw 500px;
  


}
body, input, button{
  font: 16px Roboto, sans-serif;
}
#root {
  margin: 0 auto;
  padding: 40px 20px;
};

button{
  cursor: pointer
}

`;
