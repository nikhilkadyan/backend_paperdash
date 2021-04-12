const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});
const app = require('./app');

const database = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

// Connect the database
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(con => {
    console.log('DB connection Successfully!');
});
mongoose.Promise = global.Promise;

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});