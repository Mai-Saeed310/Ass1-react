// const { createRoot } = require("react-dom/client");
// const { default: App } = require("./App");
import { createRoot } from "react-dom/client";

import App from "./App";


const root = createRoot(document.getElementById('root'));

root.render(<App/>);