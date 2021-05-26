
const express = require('express');

const app = express();
let port = 3000;

app.use(express.static('public'));

//1.
app.get('/', (request, response)=>{
    response.send(`<h1>Hello World!</h1>`)
})

//2.
app.get('/cats', (request, response)=>{

    response.send('Meow!')
})
app.get('/dogs', (request, response)=>{

    response.send('Woof!')
})

app.get('/cats_and_dogs', (request, response)=>{

    response.send('Living together!')
})


//3. Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL

// /greet/Kennedy it should say "Hello, Kennedy!"
app.get('/greet/:name/', (request, response)=>{

    let name = request.params.name;
    let msg = `Hello, ${name}!`;
    response.send(msg);
    // response.send('Hello, Kennedy!')
})

//4.
app.get('/hello1', (request, response) =>{

    let name = request.query.name || 'world';

    let ageNow = request.query.age || 'Not Available:';

    var ageYear = parseInt(age1);

    var year = 2021;

    var birthYear = year - ageYear;

    response.send('Hello ' + name + '! Born in the year: ' + birthYear);
})


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
    })
