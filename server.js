const express = require("express")
const app = express()
const path = require('path');


if (process.env.NODE_ENV != "DEV") {
// Pick up React index.html file
    app.use(
        express.static(path.join(__dirname, "/build"))
    );

    app.get("*", (req, res) => {
        res.set("Content-Security-Policy", "default-src *; style-src 'self' https://* 'unsafe-inline'; script-src 'self' https://* 'unsafe-inline' 'unsafe-eval'")
            .sendFile(
                path.join(__dirname, "/build/index.html")
            );
    })
}

const port = process.env.PORT || 3001
app.listen(port, () => console.log("Server listening on port", port))