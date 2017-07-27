import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

export default function getRoutes(checkAuth){
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} />
        <Route path='feed' component={FeedContainer}/>

        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  )
}

// const routes = (
//   <Router history={hashHistory}>
//     <Route path='/' component={MainContainer}>
//       <Route path='auth' component={AuthenticateContainer} onEnter={} />
//       <Route path='feed' component={FeedContainer}/>
//
//       <IndexRoute component={HomeContainer} />
//     </Route>
//   </Router>
// )
//
// export default routes
