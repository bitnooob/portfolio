import React, {FC} from 'react';
import Home from "./panels/Home/Home";
import Projects from "./panels/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;