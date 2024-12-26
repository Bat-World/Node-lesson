const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine
app.set('view engine', 'ejs');

// Create SQLite database connection
const db = new sqlite3.Database('./db.sqlite');

// Home route to display the to-do list
app.get('/', (req, res) => {
    db.all('SELECT * FROM todos', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send("Database Error");
        } else {
            res.render('index', { todos: rows });
        }
    });
});

// Route to add a new to-do item
app.post('/add', (req, res) => {
    const { task } = req.body;
    if (task) {
        db.run('INSERT INTO todos (task) VALUES (?)', [task], (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Database Error");
            } else {
                res.redirect('/');
            }
        });
    } else {
        res.status(400).send("Task cannot be empty");
    }
});

// Route to mark a task as completed
app.post('/complete/:id', (req, res) => {
    const taskId = req.params.id;
    db.run('UPDATE todos SET completed = 1 WHERE id = ?', [taskId], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Database Error");
        } else {
            res.redirect('/');
        }
    });
});

// Route to delete a task
app.post('/delete/:id', (req, res) => {
    const taskId = req.params.id;
    db.run('DELETE FROM todos WHERE id = ?', [taskId], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Database Error");
        } else {
            res.redirect('/');
        }
    });
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
