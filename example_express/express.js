const express = require('express');

const appServer = express();

appServer.listen(3000,
    () => {
    console.log("Server port 3000")
    });

appServer.get ('/',
    (req, res) => {
    res.send ("Hello World")
    }
)


