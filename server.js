require('dotenv').config();
const express = require("express");
const app_http = express();
const app_https = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const morgan = require('morgan');

//certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.travisanderson.xyz/privkey.pem','utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/www.travisanderson.xyz/cert.pem','utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/www.travisanderson.xyz/chain.pem','utf8'); 
const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

const httpServer = http.createServer(app_http);
const httpsServer = https.createServer(credentials, app_https);
const port = process.env.PORT || 3001;
const securePort = process.env.SECUREPORT || 3002;
httpServer.listen(port, () => console.log(`http server is running on port ${port}`));
httpsServer.listen(securePort, () => console.log(`https server is running on port ${securePort}`));


app_https.use(morgan('dev'));

if (process.env.NODE_ENV != "DEV") {
// Pick up React index.html file
      app_https.use(
        express.static(path.join(__dirname, "/build"))
    );


    app_http.get("*", (req, res) => {
        res.redirect(`https://${req.headers.host}${req.url}`);
    })
}
app_http.use((_, res) => res.redirect("/"));
app_https.use((_, res) => res.redirect("/"));
