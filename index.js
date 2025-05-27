const express = require('express');
const app = express();


// app.get('/', (req, res) =>
// {
//     res.status(200).send('Strona główna, jeszcze nic tu nie ma')
// })

app.use(express.static('public'));

app.use('/', (err, req, res, next) =>
{
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, ()=>
{
    console.log("Strona czynna na http://localhost:3000");
});