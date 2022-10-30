import * as React from "react";
import * as ReactDom from "react-dom";
import {Chip, ChipType} from "../src";
import App from "./components/app/App";
import {BrowserRouter} from "react-router-dom";

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'))
