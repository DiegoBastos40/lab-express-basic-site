const express = require('express');

const app = express();


app.use(express.static('public'));

app.get('/home',(request,response, next)=>{

    response.sendFile(__dirname + '/public/views/index.html')
});
app.get('/about',(request,response, next)=>{

    response.sendFile(__dirname + '/public/views/about.html')
});
app.get('/works',(request,response, next)=>{

    response.sendFile(__dirname + '/public/views/works.html')
});
app.get('/galery',(request,response, next)=>{

    response.sendFile(__dirname + '/public/views/galery.html')
});

app.listen(3000,() => console.log('server running on port 3000!'))