import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '8ev814c2',
    dataset: 'production',
    title: 'Preston Lund Portfolio',
    apiVersion: '2023-07-28',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;