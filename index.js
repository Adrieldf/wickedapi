const express = require('express')
const app = express()
const port = 4200

app.param('number', function (req, res, next, num, name) {
    req.params[name] = parseInt(num, 10);
    if (isNaN(req.params[name]))
        next(createError(400, 'failed to parseInt ' + num));
    else
        next();

});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/randomnumber/:number', (req, res) => {
    const number = Math.floor(Math.random() * req.params.number)
    res.send(number.toString())
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})