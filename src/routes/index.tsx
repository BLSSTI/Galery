import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Concurso from '../pages/Concurso';
import Home from '../pages/Home';
import Inscricao from '../pages/Inscricao';
import Regras from '../pages/Regras';
import Sobre from '../pages/Sobre';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/inscricao" component={Inscricao}/>

  </Switch>
)

export default Routes;