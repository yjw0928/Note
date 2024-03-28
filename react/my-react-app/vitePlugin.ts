export function myVitePlugin() {
    return {
        name: 'my-vite-plugin', // 插件名称，用于调试和日志输出

        transformIndexHtml: {
            order: 'pre', // 在其他插件之前运行
            handler: (html: string) => {
                // 根据过滤规则判断是否处理该文件
                return html.replace(
                    '</body>',
                    '<script>alert("Hello from My Vite Plugin!");</script></body>'
                );
            },
        },
    };
}
