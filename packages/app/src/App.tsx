import * as React from "react"
import { hot } from "react-hot-loader"

import { Piglet } from "@zoomy/piglet"

const App = () => (
  <div>
    <Piglet />
  </div>
)

const HotApp = hot(module)(App)

export { HotApp as App }
