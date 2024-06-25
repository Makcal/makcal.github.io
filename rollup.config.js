// noinspection JSUnusedGlobalSymbols

import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: [
        'src/scripts/main.ts',
        'src/scripts/comic.ts',
    ],
    output: {
        dir: 'build',
    },
    plugins: [
        nodeResolve({browser: true}),
        terser(),
        typescript(),
    ]
};