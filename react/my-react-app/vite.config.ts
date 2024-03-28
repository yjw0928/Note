import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { myVitePlugin } from './vitePlugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [myVitePlugin(), react()],
});
