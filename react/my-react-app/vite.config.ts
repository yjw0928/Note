import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import a from './src/customPlugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [a(), react()],
});
