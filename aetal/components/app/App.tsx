import * as React from 'react';
import {AppWrapper} from "./style";
import Header from "../header/Header";
import Body from "../body/Body";

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Body />
        </AppWrapper>
    );
};

export default App;