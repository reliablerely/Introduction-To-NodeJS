let http = require('http');

let fs = require('fs');

let path = require('path');

const newServer = http.createServer((req, res) => {
    if (req.url === '/') {
        let filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/index.html') {
        let filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            if (err) throw err
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/aboutme.html') {
        let filePath = path.join(__dirname, 'aboutme.html')
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) throw err 
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/contact.html') {
        let filePath = path.join(__dirname, 'contact.html')
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) throw err
            res.writeHead(200, {'content-Type': 'text/html'})
            res.end(data)
        })
    }
})
newServer.listen(5000, '127.0.0.1', () => {
    console.log('Server is running on port 5000')
} )