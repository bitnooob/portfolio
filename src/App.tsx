import React, {FC} from 'react';
import Home from "./panels/Home/Home";
import Projects from "./panels/Projects/Projects";
import {HashRouter, Route, Routes} from "react-router-dom";

const App: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*">not found</Route>
            </Routes>
        </HashRouter>
    );
};

export default App;