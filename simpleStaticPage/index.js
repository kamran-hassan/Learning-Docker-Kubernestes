import express from 'express';

var app = express();

app.get("/", (req, res) => {
    res.send({time: new Date().toTimeString(), Date: new Date().toDateString()});
    });

app.listen(9090, () => {
console.log("Listening to port", 9090);
});