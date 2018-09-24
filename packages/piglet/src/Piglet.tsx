import * as React from "react"
import { hot } from "react-hot-loader"

const Piglet = () => <div>🐷</div>

const hotPiglet = hot(module)(Piglet)

export { hotPiglet as Piglet }
