import React from "react"
import './src/styles/css/global.css'

import CommandPallette from "./src/components/command-pallette"

export const wrapRootElement = ({ element }) => (
  <CommandPallette>{element}</CommandPallette>
)