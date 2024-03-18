## http

#### http 服务

```javascript
const http = require('http');

const modules = require('./renderContent');

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/favicon.ico') {
        return '';
    }

    res.writeHead(modules.renderStatus(req.url), {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.write(modules.renderContent(req.url));
    res.end();
}).listen(1212, () => {
    console.log('run starting');
});
```

JSONP

```javascript
<script>
    const scriptDom = document.createElement("script") scriptDom.src
    ="http://127.0.0.1:3000/api/getUser?callback=test"
    document.body.appendChild(scriptDom) function test(obj) {console.log(obj)}
</script>;

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    console.log(urlObj);
    switch (urlObj.pathname) {
        case '/api/getUser':
            console.log(urlObj.query);
            res.end(`${urlObj.query.callback}({userId: 'yang',nick:'杨吉文'})`);
            break;
        default:
            res.end('404');
    }
}).listen(3000, () => {
    console.log('run starting 3000');
});
```
