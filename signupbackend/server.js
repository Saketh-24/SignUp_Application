const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signupRoute'); 

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.use('/signup', signupRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.errorResponse.errmsg);
});


mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = app;
