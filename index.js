

// basic express app.


const express = require('express');

const cors = require('cors');


const app = express();


app.use(cors());



app.get('/', (req, res) => {

    res.send('hello')
});


// 
app.listen(3000, () => {

    console.log('app started on port 3000');
})
