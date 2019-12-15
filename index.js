const express = require('express');
const path = require('path');
const app = express();
const devPort = 3000;

app.use(
    '/',
    express.static(path.join(__dirname, 'app')),
);

app.listen(
    devPort,
    () => console.log(`Listening on port ${devPort}!`),
);

app.use(
    (req, res, next) => res.status(404).send('Nothing to see here...'),
);

app.use(
    (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Wops, you broke it!');
    },
);