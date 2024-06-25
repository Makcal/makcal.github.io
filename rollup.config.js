// noinspection JSUnusedGlobalSymbols

import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";

export default {
    input: [
        'src/scripts/main.js',
        'src/scripts/comic.js',
    ],
    output: {
        dir: 'build',
    },
    plugins: [
        nodeResolve({browser: true}),
        terser(),
    ]
};