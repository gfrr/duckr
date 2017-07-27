import React from 'react'
import { MainContainer } from 'containers'
import { HashRouter, Route } from 'react-router-dom';

const routes = (
  <HashRouter>
      <Route path = "/" component = {MainContainer} />
  </HashRouter>

)

export default routes
