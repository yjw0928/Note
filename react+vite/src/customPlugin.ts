import { PluginOption } from 'vite';

const a = (): PluginOption => {
    return {
        name: 'my-plugin',
        enforce: 'pre',
        transformIndexHtml: () => {
            console.log('aaaa');
        },
    };
};

export default a;
