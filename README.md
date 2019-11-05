# database-mongoDB-phase
## Overview
- The point of this exercise is to help students to be able to set up a backend from the ground up using Node.js, express, MongoDB, and mongoose. It is important to know how to do this so students can apply their knowledge to their projects on the floor.

## Instructions

### Backend

#### /controllers/DatabaseController.js

* [x] router.post: endpoint will be '/'. Will be using ```Database.insertMany```.

* [x] router.put: endpoint will be '/:id'. Will be using ```Database.findByIdAndUpdate```.

* [x] router.get: endpoint will be '/'. Will be using ```Database.find```.

* [x] router.get: endpoint will be '/:id'. Will be using ```Database.findById```.

* [x] router.delete: endpoint will be '/:id'. Will be using ```Database.findByIdAndDelete```.

#### /models/Database.js

* [x] import mongoose

* [x] create a schema using ```mongoose.Schema``` that looks like this:
```
{
    title: String,
    director: String,
    plot: String,
    date: String,
    rating: String,
    haveit: String,
    cover: String
}
```

* [x] export schema using ```mongoose.model```

#### db.js

* [x] require ```dotenv``` and configure it

* [x] import mongoose

* [x] connect to your MongoDB database using your connection string which is stored in your ```.env```

* [x] add error handling
