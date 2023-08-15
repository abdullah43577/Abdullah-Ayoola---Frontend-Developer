import { createConfig, loadEnv } from 'vite';

const env = loadEnv('', process.cwd());

export default createConfig({
  define: {
    'import.meta.env': env,
  },
});
