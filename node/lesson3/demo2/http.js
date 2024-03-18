const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true)
    console.log(urlObj)
    switch (urlObj.pathname) {
        case '/api/getUser':
            console.log(urlObj.query)
            res.end(`${urlObj.query.callback}({userId: 'yang',nick:'杨吉文'})`)
            break;
        default:
            res.end("404")
    }
}).listen(3000, () => {
    console.log('run starting 3000')
})