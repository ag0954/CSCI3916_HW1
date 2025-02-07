const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res)=>{
    const acceptHeader = req.get=('accept');
    
    const responseBody = {
        acceptHeader: acceptHeader,
        ...req.body
    }
    res.json(responseBody);
});



const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`);
});

module.exports = server; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
