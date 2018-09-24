import * as React from "react"
import { hot } from "react-hot-loader"
import * as Loadable from "react-loadable"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Loading} />
      <Route path="/piglet" component={LoadablePiglet} />
      <Route path="/mooey" component={LoadableMooey} />
    </Switch>
  </Router>
)

const Loading = () => <div>...</div>

const LoadablePiglet = Loadable({
  loader: () => import("../../piglet/src"),
  loading() {
    return <Loading />
  }
})

const LoadableMooey = Loadable({
  loader: () => import("../../mooey/src"),
  loading() {
    return <Loading />
  }
})

const HotApp = hot(module)(App)

export { HotApp as App }
