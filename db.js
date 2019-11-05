require('dotenv').config()
import mongoose from 'mongoose';
mongoose.connect(process.env.db_connection_string).then(connection => {
    console.log('Connected to MongoDB');
})
    .catch(error => {
        console.log(error.message);
    });
