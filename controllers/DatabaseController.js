import express from 'express'
import bodyParser from 'body-parser'
import Database from '../models/Database'
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
router.use(bodyParser.json())

router.delete('/deleteBy?', function (req, res) {
});

router.post('/', function (req, res) {
    Database.insertMany(req.body, (err, movie) => {
        if (err) {
            res.send(err);
        }else if (movie){
            res.send(movie);
        }
    });
});

router.get('/', function (req, res) {
});

router.get('/:id', function (req, res) {

});

router.put('/:id', function (req, res) {

});

module.exports = router;
