const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const UserRouter = require('./routes/UserRoute');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', UserRouter);

mongoose.connect('mongodb://localhost:27017/signupapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
