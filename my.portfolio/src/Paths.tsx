import React from "react";
import { Home } from "./pages/Home";
import { LinkedIn } from "./pages/LinkedIn";
import { GitHub } from "./pages/GitHub";

export const Paths = {
    "/Home": () => <Home />,
    "/LinkedIn": () => <LinkedIn />,
    "/GitHub": () => <GitHub />
}