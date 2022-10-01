//server creation

//1- http module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
    console.log(req.method);
    console.log(req.url);


    // res.setHeader('content-type','text/plain');
    // res.write('hello guyz');
    // res.end();
    // res.setHeader('content-type','text/html');
    // res.write('<h1>Hello guyz ! :) </h1>');
    // res.end();

    // to send html file as res

    let path = './';
    switch(req.url){
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.html'
            break;
        default:
            path += '/Oops.html'
            break;
    };
    
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            res.write(fileData);
            res.end();
        }
    });

    // fs.readFile('./index.html', (err,fileData)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.write(fileData);
    //         res.end();
    //     }
    // })
});

// listen to the requete made - on port 3000, host , callback function
server.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000');
});