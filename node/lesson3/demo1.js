const http = require('http')

const modules = require('./renderContent')

http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/favicon.ico') {
        return ''
    }

    res.writeHead(modules.renderStatus(req.url), { "Content-Type": "text/html;charset=utf-8" })
    res.write(modules.renderContent(req.url))
    res.end()
}).listen(1212, () => {
    console.log('run starting')
})