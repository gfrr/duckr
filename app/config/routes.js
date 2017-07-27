import React from 'react'
import { MainContainer, HomeContainer } from 'containers'
import { HashRouter,Router, Route, IndexRoute } from 'react-router-dom';

const routes = (
  <HashRouter>
      <Route exact path = "/" component = {<MainContainer><HomeContainer/></MainContainer>}/>
  </HashRouter>

)

export default routes
