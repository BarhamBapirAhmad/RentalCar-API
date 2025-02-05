const { exec } = require('child_process');
const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle PHP server invocation
app.all('*', (req, res) => {
    exec('php -S 127.0.0.1:8000 -t api', (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send('PHP server error: ' + stderr);
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
