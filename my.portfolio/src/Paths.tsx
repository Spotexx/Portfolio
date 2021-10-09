import React from "react";
import { Home } from "./pages/Home";
import { LinkedIn } from "./pages/LinkedIn";
import { GitHub } from "./pages/GitHub";
import Resume from "./pages/Resume";

export const Paths = {
    "/Home": () => <Home />,
    "/LinkedIn": () => <LinkedIn />,
    "/GitHub": () => <GitHub />,
    "/Resume": () => <Resume />
}