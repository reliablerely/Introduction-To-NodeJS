let http = require('http');

let fs = require('fs');

http.createServer((req, res) => {
    
    if (req.url === '/home.html' || req.url === '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    const dataReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf-8')
    dataReadStream.pipe(res);
}
else if (req.url === '/aboutme.html'){
    res.writeHead(200, {'content-type': 'text/html'})
    const aboutMeReadStream = fs.createReadStream(`${__dirname}/aboutme.html`, 'utf-8')
    aboutMeReadStream.pipe(res);
}
else if (req.url === '/contact.html'){
    res.writeHead(200, {'content-type': 'text/html'})
    const contactReadStream = fs.createReadStream(`${__dirname}/contact.html`, 'utf-8')
    contactReadStream.pipe(res);
}
else {
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end('Error 404: Page not found')
}
}).listen(3000, '127.0.0.1', (cb) =>{
    console.log('server is running at port 3000')
})