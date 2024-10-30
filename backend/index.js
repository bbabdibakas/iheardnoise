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

const checkAuthorization = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).send('Forbidden: Missing Authorization Header');
    }

    next();
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

app.use(checkAuthorization);

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        }

        const profiles = JSON.parse(data).profiles;
        const profile = profiles.find(profile => profile.id === id);

        if (profile) {
            res.json(profile);
        } else {
            res.status(404).send('Profile not found');
        }
    });
});

app.get('/post/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Internal Server Error');
        }

        const posts = JSON.parse(data).posts;
        const profiles = JSON.parse(data).profiles;

        const post = posts.find(post => post.id === id);
        const profile = profiles.find(profile => profile.id === post.id);

        if (post) {
            res.json({ id: post.id, profile: profile, content: post.content });
        } else {
            res.status(404).send('Profile not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
