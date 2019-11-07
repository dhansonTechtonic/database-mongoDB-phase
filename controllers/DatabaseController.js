import express from 'express'
import bodyParser from 'body-parser'
import Database from '../models/Database'
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
router.use(bodyParser.json())

router.post('/', function (req, res) {
    Database.insertMany(req.body, (err, movie) => {
        if (err) {
            res.status(500).send(err);
        }else if (movie){
            res.status(200).send(movie);
        }
    })
});

router.get('/:id', function (req, res) {
    const id = req.params.id;
    Database.findById(id, (err, movie) => {
        if (err) {
            res.status(500).send(err);
        }else if (movie){
            res.status(200).send(movie);
        }
    })
});

router.get('/', function (req, res) {
    Database.find({}).exec()
        .then(docs => {
            console.log(docs)
            res.status(200).send(docs)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});

router.put('/:id', function (req, res) {
    const id = req.params.id;
    Database.findByIdAndUpdate(id, req.body, (err, movie) => {
        if (err) {
            res.status(500).send(err);
        }else if (movie) {
            res.status(200).send(movie);
        }
    })
});

router.delete('/:id', function (req, res) {
    const id = req.params.id;
    Database.findByIdAndDelete(id, (err, movie) => {
        if (err) {
            res.status(500).send(err);
        } else if (movie) {
            res.status(200).send(movie);
        }
    })
});


module.exports = router;
