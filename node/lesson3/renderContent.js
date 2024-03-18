function renderContent(url) {
    switch (url) {
        case '/login':
            return `
             <html><div>登录页</div></html>
            `
        case '/home':
            return `
                <html><div>工作台</div></html>
            `
        case '/setting':
            return `
            <html><div>配置区</div></html>
            `
        default:
            return ''

    }
}

function renderStatus(url) {
    if (['/login', '/home', '/setting'].includes(url)) {
        return 200;
    }
    return 40
}

module.exports = {
    renderStatus,
    renderContent
}