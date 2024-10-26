const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db', 'db.json');

const delayMiddleware = (req, res, next) => {
    // delay to simulate a real server 
    const delay = 1000;
    setTimeout(() => {
        next();
    }, delay);
};

app.use(delayMiddleware);

app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        }

        const users = JSON.parse(data).users;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            res.json({ id: user.id, username: user.username, });
        } else {
            res.status(403).send('Username or password is invalid');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
