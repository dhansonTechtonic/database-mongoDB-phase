import fs from 'fs';
import express from 'express';
import Database from './models/Database';
import cors from 'cors';

import db from './db';

import DatabaseController from './controllers/DatabaseController';
const app = new express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/requirements', (req, res) => {
    var filePath = "/files/requirements.pdf";
    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.use('/database', DatabaseController);

db.then(connection => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Listening on port ${port}!`));
}).catch(error => {
    console.log(error.message);
})


io.on('connection', function (socket) {
    socket.on("initial_movies", () => {
        console.log('here')
        Database.find({}).exec().then(docs => {
            console.log(docs)
            io.sockets.emit("get_movies", docs);
        });
    });

    socket.on("editMovie", (movie, id) => {
        Database
            .findByIdAndUpdate(id, movie)
            .then(updatedDoc => {
                io.sockets.emit("change_movie");
            });
    });

    socket.on("deleteMovie", id => {
        Database.findByIdAndDelete(id).then(
            deletedDoc => {
                io.sockets.emit("change_movie");
            }
        )
    })

    socket.on("addMovie", movie => {
        Database.insertMany(movie).then(postedDoc => {
            io.sockets.emit("change_movie");
        })
    })
});


http.listen(8000, function () {
    console.log('listening on *:8000');
});

module.exports = app;

