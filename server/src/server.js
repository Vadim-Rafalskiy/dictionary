const mongoose = require('mongoose');

const app = require('./app');

const PORT = 3001;

const DB_HOST =
    'mongodb+srv://Vadym:p2CU7ihzdnowNIHH@cluster0.ojufj.mongodb.net/Dictionary?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(DB_HOST)
    .then(() =>
        app.listen(PORT, () => {
            console.log(`server is runing on port ${PORT}`);
        })
    )
    .catch((err) => console.error(err.message));

// app.listen(PORT, () => {
//     console.log(`server is runing on port ${PORT}`);
// });
