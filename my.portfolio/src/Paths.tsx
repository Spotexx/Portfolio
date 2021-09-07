import React from "react";
import { Home } from "./pages/Home";
import { LinkedIn } from "./pages/LinkedIn";

export const Paths = {
    "/Home": () => <Home />,
    "/LinkedIn": () => <LinkedIn />
}