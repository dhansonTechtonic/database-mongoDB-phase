require('dotenv').config();
import mongoose from 'mongoose';

export default mongoose.connect(process.env.db_connection_string, { useFindAndModify: false });
