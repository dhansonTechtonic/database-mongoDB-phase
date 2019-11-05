import mongoose from 'mongoose';

const DatabaseSchema = new mongoose.Schema({
    title: String,
    director: String,
    plot: String,
    date: String,
    rating: String,
    haveit: String,
    cover: String
});

export default mongoose.model('Database', DatabaseSchema);


