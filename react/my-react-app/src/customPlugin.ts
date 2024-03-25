import { PluginOption } from 'vite';

const a = (): PluginOption => {
    return {
        name: 'a',
        transformIndexHtml: () => {
            console.log('1111', '22222');
        },
    };
};

export default a;
