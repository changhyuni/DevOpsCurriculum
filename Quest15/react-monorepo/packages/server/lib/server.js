const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const user = {username:'changhyun'}

app.use(cors());
app.get('/api', (req, res) => {
    res.send(user);
  });
// app.use(bodyParser.json());
// app.use('/api', (req, res)=> res.json(user));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

module.exports = app;