const Todo = require('../models/todo')
var express = require('express');
var router = express.Router();

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}

function show(req, res) {
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id)
    });
}