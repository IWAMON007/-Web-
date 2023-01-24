const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELCT * FROM items',
    (error,results) => {
      res.render('index.ejs',{items.results});
    }
  );
});

app.get('/edit', (req, res) => {
  res,render('edit.ejs');
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.listen(3000);