const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')




app.use(express.static(`${__dirname}/pub`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const posts = 123;

//получение 
app.get('/posts', function(req, res) {
    return res.send(posts);
});

  
//создание 
app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
  });





app.listen(4000, ()=>{
    console.log('Сервер запустился')
})