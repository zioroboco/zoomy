import * as React from "react"
import * as ReactDOM from "react-dom"

import Thing from "./Thing"

const render = AppRoot => {
  ReactDOM.render(React.createElement(AppRoot), document.getElementById("root"))
}

render(Thing)
