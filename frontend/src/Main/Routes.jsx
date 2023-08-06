import React from "react";
import { Route, Routes } from "react-router-dom"

import Home from "../Components/Home/Home"
import UserCrud from "../Components/User/UserCrud"

const component = props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>

export default component