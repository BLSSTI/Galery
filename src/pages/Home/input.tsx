import { Container } from "./styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const Input: React.FC = () => 
<Container>
  <form action="http://apidev.inema.ba.gov.br/participante">
  <input type="text" id="nome" name="nome"/> 
  <input type="text" id="localfoto" name="localfoto"/> 
  <input type="text" id="datafoto" name="datafoto"/> 
  <input type="submit" value="Enviar"  formMethod="POST" />
  </form>
</Container>;

export default Input;
