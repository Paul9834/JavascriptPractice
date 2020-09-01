const express = require('express');

const appServer = express();

appServer.listen(3000,
    () => {
        console.log("Server port 3000")
    });

appServer.get('/',
    (req, res) => {
        res.send("Hello World")
    }
);

appServer.get('/myInfo',
    (req, res) => {
        res.send('My name is Kevin Montealegre, Android Developer')
    }
);

appServer.post('/postrequest', (req, res) =>
    res.send('This is a post request.')
);

